import { useZadActive } from '@/utils/dates'
import LeaderBoardComing from './LeaderBoardComing'

const LeaderBoardPage = ({ number }: { number: number }) => {
  const isActive = useZadActive(number)

  return <>{isActive ? <div>leaderboard</div> : <LeaderBoardComing number={number} />}</>
}

export default LeaderBoardPage
