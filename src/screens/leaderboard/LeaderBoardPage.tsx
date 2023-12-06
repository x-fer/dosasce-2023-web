import { useZadActive } from '@/utils/dates'
import LeaderBoardComing from './LeaderBoardComing'
import LeaderBoardComponent from './LeaderBoardComponent'

const LeaderBoardPage = ({ number }: { number: number }) => {
  let isActive = useZadActive(number)
  if (number == 0) {
    isActive = true
  }

  return <>{isActive ? <LeaderBoardComponent problemNumber={number} /> : <LeaderBoardComing number={number} />}</>
}

export default LeaderBoardPage
