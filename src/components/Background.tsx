import { ReactNode } from 'react'

import BackgroundIconRow from './BackgroundIconRow'

const Background = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex-grow ">
      <div className="fixed -z-20 flex h-full w-full flex-col">
        <BackgroundIconRow animate="left" />
        <BackgroundIconRow animate="right" />
        <BackgroundIconRow animate="left" />
        <BackgroundIconRow animate="right" />
        <BackgroundIconRow animate="left" />
        <BackgroundIconRow animate="right" />
        <BackgroundIconRow animate="left" />
        <BackgroundIconRow animate="right" />
        <BackgroundIconRow animate="left" />
        <BackgroundIconRow animate="right" />
        <BackgroundIconRow animate="left" />
        <BackgroundIconRow animate="right" />
        <BackgroundIconRow animate="left" />
      </div>
      <>{children}</>
    </div>
  )
}

export default Background
