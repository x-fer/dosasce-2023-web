const UlazniPodatciButtons = ({ filePath }: { filePath: string }) => {
  return (
    <a href={filePath} download={true}>
      <button
        type="button"
        title="Preuzmi ulazne podatke"
        className="mt-5 w-auto rounded-md border-2 border-solid border-red bg-red px-2 text-center text-lg text-white md:h-12 md:w-32 md:text-2xl"
      >
        Preuzmi
      </button>
    </a>
  )
}

export default UlazniPodatciButtons
