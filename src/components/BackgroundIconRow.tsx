import { FC } from 'react'
import { Icon } from './Icon'
import classNames from 'classnames'

type direction = 'left' | 'right'

interface Props {
  animate: direction
}
const BackgroundIconRow: FC<Props> = ({ animate }) => {
  return (
    <div className="flex h-[100px] w-full">
      <div
        className={classNames(
          animate === 'left' ? 'animate-moveLeft' : 'animate-moveRight',
          'flex  w-full whitespace-nowrap'
        )}
      >
        <Icon icon="christmas-tree" className="block bg-red" size={'100px'} />
        <Icon icon="christmas-ball" className="bg-red" size={'100px'} />
        <Icon icon="christmas-lights" className="bg-red" size={'100px'} />
        <Icon icon="christmas-hat" className="bg-red" size={'100px'} />
        <Icon icon="father-christmas" className="bg-red" size={'100px'} />
        <Icon icon="snow" className="bg-red" size={'100px'} />
        <Icon icon="christmas-tree" className="block bg-red" size={'100px'} />
        <Icon icon="christmas-ball" className="bg-red" size={'100px'} />
        <Icon icon="christmas-lights" className="bg-red" size={'100px'} />
        <Icon icon="christmas-hat" className="bg-red" size={'100px'} />
        <Icon icon="father-christmas" className="bg-red" size={'100px'} />
        <Icon icon="snow" className="bg-red" size={'100px'} />
        <Icon icon="christmas-tree" className="block bg-red" size={'100px'} />
        <Icon icon="christmas-ball" className="bg-red" size={'100px'} />
        <Icon icon="christmas-lights" className="bg-red" size={'100px'} />
        <Icon icon="christmas-hat" className="bg-red" size={'100px'} />
        <Icon icon="father-christmas" className="bg-red" size={'100px'} />
        <Icon icon="snow" className="bg-red" size={'100px'} />
        <Icon icon="christmas-tree" className="block bg-red" size={'100px'} />
        <Icon icon="christmas-ball" className="bg-red" size={'100px'} />
        <Icon icon="christmas-lights" className="bg-red" size={'100px'} />
        <Icon icon="christmas-hat" className="bg-red" size={'100px'} />
        <Icon icon="father-christmas" className="bg-red" size={'100px'} />
        <Icon icon="snow" className="bg-red" size={'100px'} />
        <Icon icon="christmas-tree" className="block bg-red" size={'100px'} />
        <Icon icon="christmas-ball" className="bg-red" size={'100px'} />
        <Icon icon="christmas-lights" className="bg-red" size={'100px'} />
        <Icon icon="christmas-hat" className="bg-red" size={'100px'} />
        <Icon icon="father-christmas" className="bg-red" size={'100px'} />
        <Icon icon="snow" className="bg-red" size={'100px'} />
      </div>
    </div>
  )
}

export default BackgroundIconRow
