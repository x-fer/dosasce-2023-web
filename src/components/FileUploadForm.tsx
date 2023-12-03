import { cn } from '@/utils/utils'
import React, { useState } from 'react'

// TODO: ovo je dosl copy-paste chatGPT, nek netko tko zna sredi funkcije kako treba

const FileUploadForm = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value)
  }

  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0])
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Odaberi programski jezik:', selectedOption)
    console.log('Odaberi datoteku:', selectedFile)
  }

  return (
    <form className="max-w-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="mb-2 block text-sm" htmlFor="option">
          Odaberi programski jezik
        </label>
        <select
          className="focus:border-blue-500 w-full rounded border p-2 focus:outline-none"
          id="option"
          onChange={handleOptionChange}
        >
          <option value="" disabled selected>
            Programski jezik
          </option>
          <option value="option2">C</option>
          <option value="option1">C++</option>
          <option value="option2">Java</option>
          <option value="option2">Python</option>
          <option value="option2">Go</option>
          <option value="option2">Rust</option>
          <option value="option2">ESL</option>
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
          onChange={handleFileChange}
        />
      </div>

      <div className="flex flex-row gap-2 text-start md:flex-col md:gap-3">
        <button
          type="submit"
          title="Provjeri svoje rješenje"
          className={cn(
            'h-10 rounded-md border-2 border-solid border-red bg-red px-2 text-center text-lg text-white md:h-12 md:text-2xl',
            /*(rjesenje.length === 0 || isSending || !isLoggedIn || !isOutputValid) &&*/
            'cursor-not-allowed border-red bg-white text-red'
          )}
          onClick={() => alert('clicked') /*provjeriRjesenje*/}
          disabled={false /*rjesenje.length === 0 || isSending || !isLoggedIn || !isOutputValid*/}
        >
          Pošalji rješenje
        </button>
        {/*<div className="flex hidden items-center text-xl">Bodovi: {bodovi}/100</div>
        <div className="flex items-center text-xl">{message}</div>
          <div className="flex items-center text-xl text-red">{errorMessage}</div>*/}
      </div>
    </form>
  )
}

export default FileUploadForm
