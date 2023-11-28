import ZadatakComing from '@/components/ZadatakComing'
import { useZadActive } from '@/utils/dates'

const SecondProblem = () => {
  const isZadActive = useZadActive(2)

  return <>{isZadActive ? <div className="h-full flex-grow">SecondProblem</div> : <ZadatakComing number={2} />}</>
}

export default SecondProblem
