import { FerLogo } from '.'
import { eestecLogo } from '.'
import { XFERLogo } from '.'

const OrganisatorsLogos = () => {
  return (
    <div className="z-20 flex w-full justify-center bg-white p-5 pb-10">
      <div className="flex w-full flex-col items-center justify-center gap-4 ">
        <div className="ml-6 flex items-center justify-center gap-12">
          <div className="overflow-hidden">
            <img className="h-[38px] md:h-[72px]" src={XFERLogo} alt="X.FER-logo" />
          </div>

          <div className="overflow-hidden">
            <img
              className="h-[80px] w-[64px] object-cover md:h-[120px] md:w-[120px]"
              src={eestecLogo}
              alt="eestec-logo"
            />
          </div>

          <div className="overflow-hidden ">
            <img className="h-[64px] w-[72px] object-cover md:h-[120px] md:w-[130px]" src={FerLogo} alt="fer-logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrganisatorsLogos
