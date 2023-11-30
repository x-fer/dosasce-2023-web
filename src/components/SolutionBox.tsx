import { UserContext } from '@/App'
import { checkUserCategory, submitSolution } from '@/api/repository'
import { getZadatakDescription } from '@/utils/dates'
import { getProblemID } from '@/utils/kontestis'
import { cn } from '@/utils/utils'
import { useContext, useState } from 'react'

const SolutionBox = ({ number }: { number: number }) => {
  const [rjesenje, setRjesenje] = useState('')
  const zad = getZadatakDescription(number)
  const [bodovi, setBodovi] = useState(localStorage.getItem(zad) || 'x')
  const [isSending, setIsSending] = useState(false)
  const { user, isLoggedIn } = useContext(UserContext)

  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const getCategory = () => {
    if (!user?.email) return null

    const category = checkUserCategory(user!.email)
      .then(res => res.json())
      .then(data => data.category)

    return category
  }

  const getRjesenjeCode = (rjesenje: string) => {
    return rjesenje
  }

  const provjeriRjesenje = async () => {
    setIsSending(true)
    const rjesenjeCode = getRjesenjeCode(rjesenje)

    const base64 = btoa(rjesenjeCode)
    const category = await getCategory()
    const problemID = getProblemID(category, 1)

    if (!base64 || !category || !problemID) {
      setMessage('')
      setErrorMessage(
        'Greška prilikom slanja rješenja, molimo pokušaj ponovno! Ako se problem nastavi kontaktiraj nas na dosasce@xfer.hr'
      )
      setIsSending(false)
    } else {
      setMessage('Rješenje se učitava...')
      setErrorMessage('')

      submitSolution(problemID, base64)
        .then(res => res.json())
        .then(res => {
          console.log(res)
          if (res.status === 'OK' || res.status === 200 || res.status === 201) {
            setBodovi('0')
            setMessage('Rješenje poslano, pogledaj stanje na rang listi! Ivan ti šalje <3')
          } else {
            setMessage('')
            setErrorMessage(
              'Greška prilikom slanja rješenja, molimo pokušaj ponovno! Ako se problem nastavi kontaktiraj nas na dosasce@xfer.hr'
            )
          }
        })
        .catch(err => {
          console.log(err)
          setMessage('')
          setErrorMessage(
            'Greška prilikom slanja rješenja, molimo pokušaj ponovno! Ako se problem nastavi kontaktiraj nas na dosasce@xfer.hr'
          )
        })
        .finally(() => {
          setIsSending(false)
        })
    }
  }

  return (
    <div className="w-[100%]">
      <div className="relative">
        <textarea
          id="rjesenje"
          contentEditable
          required
          className="paragraph relative h-[400px] w-full max-w-full resize-none rounded-md border-2 border-solid border-red p-1"
          onChange={e => {
            const lines = e.target.value.split('\n')
            if (lines.length > 2 * 1e6) {
              alert('Unos prevelik, možeš bolje sigurno :D')
              e.target.value = ''
            } else {
              setRjesenje(e.target.value)
            }
          }}
        />
        {isSending && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="z-30 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-red border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 text-start md:flex-col md:gap-3">
          <button
            type="button"
            title="Provjeri svoje rješenje"
            className={cn(
              'h-10 rounded-md border-2 border-solid border-red bg-red px-2 text-center text-lg text-white md:h-12 md:text-2xl',
              (rjesenje.length === 0 || isSending || !isLoggedIn) && 'cursor-not-allowed border-red bg-white text-red'
            )}
            onClick={provjeriRjesenje}
            disabled={rjesenje.length === 0 || isSending || !isLoggedIn}
          >
            Pošalji rješenje
          </button>
          <div className="flex hidden items-center text-xl">Bodovi: {bodovi}/100</div>
          <div className="flex items-center text-xl">{message}</div>
          <div className="flex items-center text-xl text-red">{errorMessage}</div>
        </div>
        <div>
          <a
            href={`/leaderboard/${number}`}
            className="paragraph text-md cursor-pointer font-semibold leading-7 text-red underline"
          >
            Rang lista!
          </a>
        </div>
      </div>
    </div>
  )
}

export default SolutionBox
