import { useParams } from 'react-router-dom'

import ErrorPage from '@/screens/ErrorPage'
import LeaderBoardPage from './LeaderBoardPage'

const ProblemRouter = () => {
  const { leaderboard_id } = useParams()

  switch (leaderboard_id) {
    case '1':
      return <LeaderBoardPage number={1} />
    case '2':
      return <LeaderBoardPage number={2} />
    case '3':
      return <LeaderBoardPage number={3} />
    default:
      return <ErrorPage />
  }
}
export default ProblemRouter
