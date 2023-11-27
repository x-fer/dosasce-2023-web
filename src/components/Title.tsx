import { cn } from '@/utils/utils'
import { ReactNode } from 'react'

type titleType = 'title' | 'subtitle'
const Title = ({ type, children, className }: { type: titleType; children: ReactNode; className?: string }) => {
  return (
    <p
      className={cn(
        className,
        type === 'title'
          ? 'mb-6 text-3xl md:mb-10 md:text-4xl lg:text-5xl'
          : 'mb-4 mt-5 text-xl md:text-2xl lg:text-3xl'
      )}
    >
      {children}
    </p>
  )
}

export default Title
