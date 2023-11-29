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
  const { user } = useContext(UserContext)

  const getCategory = () => {
    const category = checkUserCategory(user!.email)
      .then(res => res.json())
      .then(data => data.category)

    return category
  }

  const getRjesenjeCode = (rjesenje: string) => {
    return `print('` + rjesenje + `')`
  }

  const provjeriRjesenje = async () => {
    alert('Rješenje poslano! Ivan ti šalje <3')

    setIsSending(true)
    const rjesenjeCode = getRjesenjeCode(rjesenje)

    const base64 = btoa(rjesenjeCode)
    const category = await getCategory()
    const problemID = getProblemID(category, 1)

    submitSolution(problemID, base64)
      .then(res => res.json())
      .then(res => {
        if (res.status === 'OK') {
          setBodovi('0')
        }
      })
      .finally(() => {
        setIsSending(false)
      })
  }

  return (
    <div className="w-[100%]">
      <textarea
        id="rjesenje"
        contentEditable
        required
        className="paragraph h-[400px] w-full max-w-full resize-none rounded-md border-2 border-solid border-red p-1"
        onChange={e => {
          const lines = e.target.value.split('\n')
          if (lines.length > 2 * 1e6) {
            alert('Unos prevelik, možeš bolje siguno :D')
            e.target.value = ''
          } else {
            setRjesenje(e.target.value)
          }
        }}
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 text-start md:flex-col md:gap-3">
          <button
            type="button"
            title="Provjeri svoje rješenje"
            className={cn(
              'h-10 rounded-md border-2 border-solid border-red bg-red px-2 text-center text-lg text-white md:h-12 md:text-2xl',
              (rjesenje.length === 0 || isSending) && 'cursor-not-allowed border-red bg-white text-red'
            )}
            onClick={provjeriRjesenje}
            disabled={rjesenje.length === 0 || isSending}
          >
            Pošalji rješenje
          </button>
          <div className="flex items-center text-xl">Bodovi: {bodovi}/100</div>
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
