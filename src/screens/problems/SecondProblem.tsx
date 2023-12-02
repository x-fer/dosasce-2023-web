import { Title } from '@/components'
import ProblemPage from '@/components/ProblemPage'
import ZadatakComing from '@/components/ZadatakComing'
import { useZadActive } from '@/utils/dates'

const SecondProblem = () => {
  const isZadActive = useZadActive(2)

  return (
    <>
      {isZadActive ? (
        <ProblemPage>
          <Title type="title">2. Zadatak</Title>
        </ProblemPage>
      ) : (
        <ZadatakComing number={2} />
      )}
    </>
  )
}

export default SecondProblem
