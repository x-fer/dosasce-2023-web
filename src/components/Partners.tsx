import { AmazingaLogo, AxisLogo, FerLogo, OldLockUpLogo } from '.'
import { eestecLogo } from '.'
import { XFERLogo } from '.'

const Partners = () => {
  return (
    <div className="z-20 flex w-full justify-center bg-white p-5 pb-10">
      <div className="flex flex-col items-center justify-center gap-4 md:w-full ">
        <div className="ml-12 flex items-center justify-center gap-12">
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

        <div className="flex items-center  gap-8">
          <div className="overflow-hidden">
            <img className="h-[64px]" src={AmazingaLogo} alt="amazinga-logo" />
          </div>

          <div className="overflow-hidden">
            <img className="h-[180px]" src={OldLockUpLogo} alt="oldlockup-logo" />
          </div>

          <div className="overflow-hidden">
            <img className="h-[60px]" src={AxisLogo} alt="axis-logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
