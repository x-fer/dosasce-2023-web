import { ReactNode } from 'react'
import { Background } from '@/components'

const ProblemPage = ({ children, image }: { children: ReactNode; image?: ReactNode }) => {
  return (
    <Background>
      <div className="align-center h-full w-full py-10 sm:px-0 md:px-16 lg:px-32">
        <div className="flex h-full w-full flex-grow flex-col rounded-lg border-2 border-solid border-light-red bg-white">
          {image}
          <section className="h-full p-4 md:p-10">{children}</section>
        </div>
      </div>
    </Background>
  )
}

export default ProblemPage
