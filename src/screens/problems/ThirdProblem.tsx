import ZadatakComing from '@/components/ZadatakComing'
import { useZadActive } from '@/utils/dates'

const ThirdProblem = () => {
  const isZadActive = useZadActive(3)

  return <>{isZadActive ? <div className="h-full flex-grow">Third problem</div> : <ZadatakComing number={3} />}</>
}

export default ThirdProblem
