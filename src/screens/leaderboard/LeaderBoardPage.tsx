import { useZadActive } from '@/utils/dates'
import LeaderBoardComing from './LeaderBoardComing'
import LeaderBoardComponent from './LeaderBoardComponent'

const LeaderBoardPage = ({ number }: { number: number }) => {
  const isActive = useZadActive(number)

  return <>{isActive ? <LeaderBoardComponent problemNumber={number} /> : <LeaderBoardComing number={number} />}</>
}

export default LeaderBoardPage
