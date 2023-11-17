import { useParams } from 'react-router-dom'

import { FirstProblem, SecondProblem, ThirdProblem } from '@/screens/problems'

const ProblemRouter = () => {
  const { problem_id } = useParams()

  switch (problem_id) {
    case '1':
      return <FirstProblem />
    case '2':
      return <SecondProblem />
    case '3':
      return <ThirdProblem />
  }
}
export default ProblemRouter
