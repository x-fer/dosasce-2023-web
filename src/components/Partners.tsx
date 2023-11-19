import { FerLogo } from '.'
import { eestecLogo } from '.'
import { XFERLogo } from '.'

const Partners = () => {
  return (
    <div className="z-20 flex w-full justify-center bg-white p-5 pb-10">
      <div className="flex flex-row items-center justify-center bg-snow-pattern">
        <div className="overflow-hidden">
          <img className="sm:h-[38px] md:h-[60px]" src={XFERLogo} />
        </div>
        <div className="overflow-hidden">
          <img className="sm:h-[64px]7 md:h-[100px]" src={eestecLogo} />
        </div>
        <div className="overflow-hidden">
          <img className="sm:h-[64px] md:h-[100px]" src={FerLogo} />
        </div>
      </div>
    </div>
  )
}

export default Partners
