import FerLogo from '../resources/partners/fer-logo.png'

const Partners = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center bg-snow-pattern">
        <div className="font-monomaniac text-center text-6xl antialiased">
          <h1>Partneri</h1>
        </div>
        <div className="mx-auto max-w-2xl overflow-hidden bg-cover">
          <img src={FerLogo} className="w-full max-w-2xl bg-gray-900" />
        </div>
      </div>
    </div>
  )
}

export default Partners
