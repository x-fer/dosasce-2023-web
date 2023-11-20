import { FerLogo } from '.'
import { eestecLogo } from '.'
import { XFERLogo } from '.'

const Partners = () => {
  return (
    <div className="z-20 flex w-full justify-center bg-white p-5 pb-10">
      <div className="flex flex-row items-center justify-center gap-4 md:w-full md:flex-row">
        <div className="overflow-hidden">
          <img className="h-[38px] md:h-[72px]" src={XFERLogo} />
        </div>

        <div className="overflow-hidden">
          <img className="h-[80px] w-[64px] object-cover md:h-[120px] md:w-[120px]" src={eestecLogo} />
        </div>

        <div className="overflow-hidden ">
          <img className="h-[64px] w-[72px] object-cover md:h-[120px] md:w-[130px]" src={FerLogo} />
        </div>
      </div>
    </div>
  )
}

export default Partners
