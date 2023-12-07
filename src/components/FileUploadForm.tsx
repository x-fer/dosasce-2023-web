import { UserContext } from '@/App'
import { submitSolution2 } from '@/api/repository'
import { getProblemID } from '@/utils/kontestis'
import { cn } from '@/utils/utils'
import { useContext, useEffect, useState } from 'react'

const nameExtensionDictionary = {
  c: {
    name: 'C',
    extension: 'c',
    kontestis: 'c',
  },
  cpp: {
    name: 'C++',
    extension: 'cpp',
    kontestis: 'cpp',
  },
  java: {
    name: 'Java',
    extension: 'java',
    kontestis: 'java',
  },
  python: {
    name: 'Python',
    extension: 'py',
    kontestis: 'python',
  },
  go: {
    name: 'Go',
    extension: 'go',
    kontestis: 'go',
  },
  rust: {
    name: 'Rust',
    extension: 'rs',
    kontestis: 'rust',
  },
  esl: {
    name: 'ESL',
    extension: 'esl',
    kontestis: 'esl',
  },
}

type possibleProgrammingLanguages = keyof typeof nameExtensionDictionary
//type possibleExtensions = (typeof nameExtensionDictionary)[possibleProgrammingLanguages]['extension'] | 'txt'

const FileUploadForm = () => {
  const [selectedOption, setSelectedOption] = useState<possibleProgrammingLanguages>()
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

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault()

  //   setIsSending(true)

  //   await getBase64File(selectedFile!, (result: string | ArrayBuffer | null) => setBase64File(result))

  //   const category = getCategory()
  //   const problemID = getProblemID(category as string, 2)

  //   submitSolution2(problemID, base64File! as string, selectedOption!)
  //     .then(res => res.json())
  //     .finally(() => {
  //       setIsSending(false)
  //     })
  // }

  useEffect(() => {
    if (selectedOption && selectedFile) {
      setError('')

      if (
        selectedOption !== undefined &&
        selectedFile !== undefined &&
        selectedFile?.name.split('.')[1] !== 'txt' &&
        nameExtensionDictionary[selectedOption].extension !== selectedFile?.name.split('.')[1]
      ) {
        setError('Odabrani programski jezik ne odgovara odabranoj datoteci.')
      }

      if (
        selectedFile &&
        selectedFile?.name.split('.')[1] !== 'txt' &&
        !Object.values(nameExtensionDictionary).some(lang => lang.extension === selectedFile?.name.split('.')[1])
      ) {
        setError(
          'Odabrana datoteka nije ispravnog formata. Molim vas da odaberete .txt, .c, .cpp, .java, .py, .go ili .rs datoteku.'
        )
      }
    }
  }, [selectedOption, selectedFile])

  useEffect(() => {
    if (isSending && base64File && selectedOption && selectedFile) {
      const category = getCategory()
      const problemID = getProblemID(category as string, 2)

      submitSolution2(problemID, base64File as string, selectedOption)
        .then(res => res.json())
        .finally(() => {
          setIsSending(false)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSending, base64File, selectedOption, selectedFile])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    setIsSending(true)

    getBase64File(selectedFile!, (result: string | ArrayBuffer | null) => {
      setBase64File(result)
    })
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="max-w-sm">
        <div className="mb-4">
          <label className="mb-2 block text-sm" htmlFor="option">
            Odaberi programski jezik
          </label>
          <select
            className="focus:border-blue-500 w-full rounded border p-2 focus:outline-none"
            id="option"
            onChange={e => {
              setSelectedOption(e.target.value as possibleProgrammingLanguages)
            }}
          >
            <option value="" disabled selected>
              Programski jezik
            </option>
            {Object.values(nameExtensionDictionary).map(lang => (
              <option value={lang.kontestis} key={lang.extension}>
                {lang.name}
              </option>
            ))}
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
      </div>

      <div className="flex w-full flex-col  gap-2 md:flex-row md:gap-3">
        <button
          type="submit"
          title="Provjeri svoje rješenje"
          className={cn(
            'h-10 min-w-[180px] rounded-md border-2 border-solid border-red bg-red px-2 text-center text-lg text-white md:h-12 md:text-2xl',
            'disabled:cursor-not-allowed disabled:bg-white disabled:text-red'
          )}
          onClick={event => handleSubmit(event)}
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
