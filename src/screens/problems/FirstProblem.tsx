import { Sarme, Title } from '@/components'
import ProblemPage from '@/components/ProblemPage'
import SolutionBox from '@/components/SolutionBox'

const FirstProblem = () => {
  const sarme = <img src={Sarme} alt="Sarme" className=" w-full rounded-t-md" />

  return (
    <ProblemPage image={sarme}>
      <Title type="title">Sarme</Title>
      <p className="paragraph">
        Ivan je napokon dočekao Božićnu sarmu. Ove je godine nagovorio mamu da skuha baš puno sarmi. Nakon što su svi
        otišli spavati on je otišao u kuhinju, uzeo{' '}
        <a
          href="https://www.klubputnika.org/zbirka/putoskop/3822-seflja-paljak-kaciol-grabljaca-kutlaca-ili-pak-zaimaca"
          className="text-red underline"
          target="_blank"
        >
          šeflju
        </a>{' '}
        i krenuo trpati sarme u svoj tanjur, no nakon nekog vremena je shvatio kako ovim tempom nikad neće izgrabiti sve
        sarme. Naime, Ivan želi sve sarme prebaciti u svoj tanjur u što manje grabljenja, no kako ne zna optimalan način
        da to napravi zatražio je Vas za pomoć.
      </p>
      <p className="paragraph">
        Formalnije, lonac u kojem se nalaze sarme može se prikazati kartezijevim koordinatnim sustavom, svaka sarma
        pravokutnikom čiji su vrhovi cjelobrojne točke te šeflja krugom radijusa R. U svakom grabljenju Ivan postavlja
        šeflju na neke realne koordinate te vadi sve sarme koje šeflja dotiče svojom površinom. Vaš cilj je naći
        minimalni broj grabljenja takav da bi sve sarme bile pojedene.
      </p>
      <Title type="subtitle">Ulazni podaci</Title>
      <p className="paragraph">
        U prvom redu nalaze N i R - broj sarmi u loncu (N ≤ <var>10</var>
        <sup>6</sup>) te radijus šeflje (R ≤ <var>10</var>
        <sup>9</sup>) U idućih N redaka nalazi se po 6 brojeva, 3 vrha svake sarme (x1,y1,x2,y2,x3,y3 ≤ <var>10</var>
        <sup>9</sup>).
      </p>
      <Title type="subtitle">Izlazni podaci</Title>
      <p className="paragraph">
        U prvom redu nalazi se K - ukupan broj grabljenja sarmi. U idućih K redaka nalazi se jedan broj, središte šeflje
        i-tog grabljenja na maksimalno 6 decimala.
      </p>

      <Title type="subtitle">Rješenje</Title>

      <SolutionBox problem="zad1" />
    </ProblemPage>
  )
}

export default FirstProblem
