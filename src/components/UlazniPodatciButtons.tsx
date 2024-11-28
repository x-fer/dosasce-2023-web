const UlazniPodatciButtons = ({ filePath, title }: { filePath: string; title: string }) => {
  return (
    <a href={filePath} download={true}>
      <button
        type="button"
        title={title}
        className="mt-5 w-auto rounded-md border-2 border-solid border-red bg-red px-2 text-center text-lg text-white md:h-12 md:text-2xl"
      >
        {title}
      </button>
    </a>
  )
}

export default UlazniPodatciButtons
