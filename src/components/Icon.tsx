import React from 'react'
import christmasTree from '@/assets/icons/icon-christmas-tree.svg'
import christmasBall from '@/assets/icons/icon-christmas-ball-line.svg'
import christmasLights from '@/assets/icons/icon-christmas-lights.svg'
import christmasHat from '@/assets/icons/icon-christmas-hat-line.svg'
import christmasFather from '@/assets/icons/icon-father-christmas-line.svg'
import christmasSnow from '@/assets/icons/icon-snow.svg'

const icons = {
  'christmas-tree': christmasTree,
  'christmas-ball': christmasBall,
  'christmas-lights': christmasLights,
  'christmas-hat': christmasHat,
  'father-christmas': christmasFather,
  snow: christmasSnow,
}

export type IconName = keyof typeof icons

export const Icon: React.FC<{
  icon: IconName
  size?: string | number
  className?: string
}> = ({ icon, size, className }) => {
  return (
    <div
      className={'transition-all duration-200 ease-in '.concat(className ? className : 'bg-neutral')}
      style={{
        height: size ? size : '24px',
        minHeight: size ? size : '24px',
        width: size ? size : '24px',
        minWidth: size ? size : '24px',
        WebkitMaskImage: `url('${icons[icon]}')`,
        maskImage: `url('${icons[icon]}')`,
        WebkitMaskRepeat: 'no-repeat',

        WebkitMaskSize: 'contain',
        WebkitMaskPosition: 'center center',
        maskRepeat: 'no-repeat',
      }}
    />
  )
}

export default Icon
