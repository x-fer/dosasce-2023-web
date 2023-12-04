import { UserContext } from '@/App'
import { submitSolution2 } from '@/api/repository'
import { getProblemID } from '@/utils/kontestis'
import { cn } from '@/utils/utils'
import { useContext, useEffect, useState } from 'react'

export type PossibleOptions = 'c' | 'c++' | 'java' | 'python' | 'go' | 'rust' | 'esl'

const POSSIBLE_OPTIONS: Array<string> = ['c', 'c++', 'java', 'python', 'go', 'rust', 'esl']

const FileUploadForm = () => {
  const [selectedOption, setSelectedOption] = useState<PossibleOptions>()
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined)
  const [base64File, setBase64File] = useState<string | ArrayBuffer | null>('')
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')

  const { user, isLoggedIn, categoryData } = useContext(UserContext)

  const getCategory = () => {
    if (!user?.email) return null

    return categoryData?.[user?.email]
  }

  const getBase64File = async (file: File, cb: (result: string | ArrayBuffer | null) => void) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      cb(reader.result?.toString().split(',')[1] as string | ArrayBuffer | null)
    }
    reader.onerror = function (error) {
      console.error('Error: ', error)
    }
  }

  const handleSubmit = async () => {
    setIsSending(true)

    await getBase64File(selectedFile!, (result: string | ArrayBuffer | null) => setBase64File(result))

    const category = getCategory()
    const problemID = getProblemID(category as string, 2)

    submitSolution2(problemID, base64File! as string, selectedOption!)
      .then(res => res.json())
      .finally(() => {
        setIsSending(false)
      })
  }

  useEffect(() => {
    if (selectedOption !== undefined && selectedOption !== selectedFile?.name.split('.')[1]) {
      setError('Odabrani programski jezik ne odgovara odabranoj datoteci.')
    }

    if (!POSSIBLE_OPTIONS.includes(selectedFile!.name.split('.')[1])) {
      setError(
        'Odabrana datoteka nije ispravnog formata. Molim vas da odaberete .c, .cpp, .java, .py, .go ili .rs datoteku.'
      )
    }
  }, [selectedOption, selectedFile])

  return (
    <form className="max-w-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="mb-2 block text-sm" htmlFor="option">
          Odaberi programski jezik
        </label>
        <select
          className="focus:border-blue-500 w-full rounded border p-2 focus:outline-none"
          id="option"
          onChange={e => {
            setSelectedOption(e.target.value as PossibleOptions)
          }}
        >
          <option value="" disabled selected>
            Programski jezik
          </option>
          <option value="c">C</option>
          <option value="c++">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="go">Go</option>
          <option value="rust">Rust</option>
          <option value="esl">ESL</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm" htmlFor="file">
          Učitaj datoteku
        </label>
        <input
          className="focus:border-blue-500 w-full rounded border p-2 focus:outline-none"
          type="file"
          id="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSelectedFile(e.target.files?.[0] as File)
          }}
        />
      </div>

      <div className="flex flex-row gap-2  md:flex-col md:gap-3">
        <button
          type="submit"
          title="Provjeri svoje rješenje"
          className={cn(
            'h-10 min-w-[140px] rounded-md border-2 border-solid border-red bg-red px-2 text-center text-lg text-white md:h-12 md:text-2xl',
            'disabled:cursor-not-allowed disabled:bg-white disabled:text-red'
          )}
          onClick={() => handleSubmit()}
          disabled={!selectedOption || !selectedFile || isSending || !isLoggedIn || error.length > 0}
        >
          Pošalji rješenje
        </button>
        <p className="paragraph text-lg text-red md:text-xl">{error}</p>
      </div>
    </form>
  )
}

export default FileUploadForm
