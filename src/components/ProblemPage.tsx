import { ReactNode } from 'react'
import { Background } from '@/components'

const ProblemPage = ({ children, image }: { children: ReactNode; image?: ReactNode }) => {
  return (
    <Background>
      <div className="h-full w-full px-4 py-10 md:px-8 lg:px-10">
        <div className="flex h-full w-full flex-grow flex-col rounded-lg border-2 border-solid border-light-red bg-white">
          {image}
          <section className="h-full p-4 md:p-10">{children}</section>
        </div>
      </div>
    </Background>
  )
}

export default ProblemPage
