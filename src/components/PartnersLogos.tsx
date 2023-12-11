import { AmazingaLogo, AxisLogo, KartingArena, OldLockUpLogo } from '.'

const PartnersLogos = () => {
  return (
    <div className="z-20 flex w-full justify-center bg-white p-5 pb-10">
      <div className="flex w-full flex-col items-center justify-center gap-4 ">
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="flex w-full items-center justify-center gap-8">
            <div className="overflow-hidden">
              <img className="h-[52px] w-auto md:h-[64px]" src={AmazingaLogo} alt="amazinga-logo" />
            </div>

            <div className="overflow-hidden">
              <img className="h-[144px] w-auto md:h-[180px]" src={OldLockUpLogo} alt="oldlockup-logo" />
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-8">
            <div className="overflow-hidden">
              <img className="h-[48px] w-auto md:h-[60px]" src={AxisLogo} alt="axis-logo" />
            </div>

            <div className="overflow-hidden">
              <img className="h-[96px] w-auto md:h-[120px]" src={KartingArena} alt="axis-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnersLogos
