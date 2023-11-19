import { FerLogo } from '.'

const Partners = () => {
  return (
    <div className="w-full bg-white">
      <div className="bg-snow-pattern flex flex-col items-center justify-center">
        <h1 className="my-8 text-6xl">Partneri</h1>

        <div className="overflow-hidden">
          <img src={FerLogo} />
        </div>
      </div>
    </div>
  )
}

export default Partners
