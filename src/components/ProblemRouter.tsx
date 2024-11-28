import { useParams } from 'react-router-dom'

import { FirstProblem, SecondProblem, ThirdProblem } from '@/screens/problems'
import ErrorPage from '@/screens/ErrorPage'

const ProblemRouter = () => {
  const { problem_id } = useParams()

  switch (problem_id) {
    case '1':
      return <FirstProblem />
    case '2':
      return <SecondProblem />
    case '3':
      return <ThirdProblem />
    default:
      return <ErrorPage />
  }
}
export default ProblemRouter
