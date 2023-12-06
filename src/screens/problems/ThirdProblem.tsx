import { Title } from '@/components'
import ProblemPage from '@/components/ProblemPage'
import ZadatakComing from '@/components/ZadatakComing'
// import { useZadActive } from '@/utils/dates'

const ThirdProblem = () => {
  // const isZadActive = useZadActive(3)
  const isZadActive = true

  return (
    <>
      {isZadActive ? (
        <ProblemPage>
          <Title type="title">2. Zadatak</Title>
          <p className="paragraph">
            Ivanova mama Marinka već je godinama zaposlena kod Djeda Božićnjaka. Kako je ove godine odlučila napraviti
            gomilu sarmi, nadala se da će moći od Djeda dobiti par slobodnih dana oko Božića, ali Djed nije imao
            razumijevanja. Navodno je bitnija sreća neke tamo djece nego njezinog Ivana.
          </p>
          <br />
        </ProblemPage>
      ) : (
        <ZadatakComing number={3} />
      )}
    </>
  )
}

export default ThirdProblem
