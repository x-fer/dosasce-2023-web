import { Sarme, Title } from '@/components'
import ProblemPage from '@/components/ProblemPage'

const FirstProblem = () => {
  const sarme = <img src={Sarme} alt="Sarme" className="max-h-[400px] rounded-t-md" />

  return (
    <ProblemPage image={sarme}>
      <Title type="title" className="mb-10">
        Sarme
      </Title>
      <p className="paragraph">
        Ivan je napokon dočekao Božićnu sarmu. Ove je godine nagovorio mamu da skuha baš puno sarmi. Nakon što su svi
        otišli spavati on je otišao u kuhinju, uzeo šeflju i krenuo trpati sarme u svoj tanjur, no nakon nekog vremena
        je shvatio kako ovim tempom nikad neće izgrabiti sve sarme. Naime, Ivan želi sve sarme prebaciti u svoj tanjur u
        što manje grabljenja, no kako ne zna optimalan način da to napravi zatražio je Vas za pomoć.
      </p>
      <p className="paragraph">
        Formalnije, lonac u kojem se nalaze sarme može se prikazati kartezijevim koordinatnim sustavom, svaka sarma
        pravokutnikom čiji su vrhovi cjelobrojne točke te šeflja krugom radijusa R. U svakom grabljenju Ivan postavlja
        šeflju na neke realne koordinate te vadi sve sarme koje šeflja dotiče svojom površinom. Vaš cilj je naći
        minimalni broj grabljenja takav da bi sve sarme bile pojedene.
      </p>
      <Title type="subtitle" className="mb-5 mt-5">
        Ulazni podaci
      </Title>
      <p className="paragraph">
        U prvom redu nalaze N i R - broj sarmi u loncu (N ≤ 10^6) te radijus šeflje (R ≤ 10^9) U idućih N redaka nalazi
        se po 6 brojeva, 3 vrha svake sarme (x1,y1,x2,y2,x3,y3 ≤ 10^9).
      </p>

      <Title type="subtitle" className="mb-5 mt-5">
        Izlazni podaci
      </Title>
      <p className="paragraph">
        U prvom redu nalazi se K - ukupan broj grabljenja sarmi. U idućih K redaka nalazi se jedan broj, središte šeflje
        i-tog grabljenja na maksimalno 6 decimala.
      </p>

      <Title type="subtitle" className="mb-5 mt-5">
        Rješenje
      </Title>
      <form>
        <input id="rjesenje" className="rounded-md border-2 border-solid border-light-red px-1"></input>
      </form>
    </ProblemPage>
  )
}

export default FirstProblem
