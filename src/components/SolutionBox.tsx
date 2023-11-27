import { cn } from '@/utils/utils'
import { useState } from 'react'

const SolutionBox = ({ problem }: { problem: string }) => {
  const [rjesenje, setRjesenje] = useState('')
  const [bodovi, setBodovi] = useState(localStorage.getItem(problem) || 'x')
  const [isSending, setIsSending] = useState(false)

  const provjeriRjesenje = () => {
    setIsSending(true)
    const rjesenjeCode = getRjesenjeCode(rjesenje)

    const base64 = btoa(rjesenjeCode)
    fetch(import.meta.env.VITE_API_ENDPOINT + '/api/submission/251833970424025088', {
      method: 'POST',
      headers: {
        Authorization: `${localStorage.getItem('SavedLoginToken')}`,
        'X-Kontestis-Org-Id': '245568648297582592',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language: 'python',
        code: base64,
      }),
    })
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

  const getRjesenjeCode = (rjesenje: string) => {
    return `print('` + rjesenje + `')`
  }
  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-2">
      <textarea
        id="rjesenje"
        contentEditable
        required
        className="paragraph h-[400px] max-w-[400px] resize-none rounded-md border-2 border-solid border-red p-1 md:w-[400px]"
        onChange={e => setRjesenje(e.target.value)}
      />
      <div className="flex flex-row gap-2 text-start md:flex-col md:gap-3">
        <button
          type="button"
          title="Provjeri svoje rješenje"
          className={cn(
            'h-10 w-28 rounded-md border-2 border-solid border-red bg-red px-2 text-center text-lg text-white md:h-12 md:w-32 md:text-2xl',
            (rjesenje.length === 0 || isSending) && 'cursor-not-allowed border-red bg-white text-red'
          )}
          onClick={provjeriRjesenje}
          disabled={rjesenje.length === 0 || isSending}
        >
          Provjeri
        </button>
        <div className="flex items-center text-xl">Bodovi: {bodovi}/100</div>
      </div>
    </div>
  )
}

export default SolutionBox
