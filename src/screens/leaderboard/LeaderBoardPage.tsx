// import { useZadActive } from '@/utils/dates'
import LeaderBoardComing from './LeaderBoardComing'
import LeaderBoardComponent from './LeaderBoardComponent'

const LeaderBoardPage = ({ number }: { number: number }) => {
  const isActive = true //useZadActive(number)

  return <>{isActive ? <LeaderBoardComponent /> : <LeaderBoardComing number={number} />}</>
}

export default LeaderBoardPage
