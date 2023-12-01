import { GeoSarme, Sarme, Title } from '@/components'
import ProblemPage from '@/components/ProblemPage'
import SolutionBox from '@/components/SolutionBox'
import UlazniPodatciButtons from '@/components/UlazniPodatciButtons'
import ZadatakComing from '@/components/ZadatakComing'
// import { useZadActive } from '@/utils/dates'

const FirstProblem = () => {
  const sarme = (
    <div className="h-72 rounded-t-md">
      <img src={Sarme} alt="Sarme" className="h-full max-h-full w-full max-w-full object-cover" />
    </div>
  )

  // const isZadActive = useZadActive(1)
  const isZadActive = true

  return (
    <>
      {isZadActive ? (
        <ProblemPage image={sarme}>
          <Title type="title">Sarme</Title>
          <p className="paragraph">
            Ivan je napokon dočekao božićnu sarmu, a ove je godine nagovorio mamu da ih skuha baš puno! Nakon što su svi
            otišli spavati, on je otišao u kuhinju, uzeo{' '}
            <a
              href="https://www.klubputnika.org/zbirka/putoskop/3822-seflja-paljak-kaciol-grabljaca-kutlaca-ili-pak-zaimaca"
              className="text-red underline"
              target="_blank"
            >
              šeflju
            </a>{' '}
            i krenuo trpati sarme u svoj tanjur, ali je uskoro shvatio da ovim tempom nikada neće ugrabiti sve sarme.
            Naime, Ivan želi sve sarme prebaciti u svoj tanjur u što manje grabljenja, no kako ne zna optimalan način da
            to napravi, zatražio je vašu pomoć.
          </p>
          <p className="paragraph">
            Formalnije, lonac u kojem se nalaze sarme može se prikazati Kartezijevim koordinatnim sustavom, a svaka
            sarma pravokutnikom čiji su vrhovi cjelobrojne točke. Šeflja je prikazana krugom radijusa R. U svakom
            grabljenju Ivan postavlja šeflju na neke <b>realne</b> koordinate te grabi sve sarme koje šeflja dotiče
            svojom površinom. Vaš cilj je naći minimalan broj grabljenja takav da sve sarme završe u Ivanovom tanjuru.
          </p>
          <div className="flex items-center gap-4">
            <Title type="subtitle">Ulazni podaci</Title>
          </div>

          <p className="paragraph">
            U prvom se redu nalaze N i R - broj sarmi u loncu (1 ≤ N ≤ <var>10</var>
            <sup>5</sup>) te radijus šeflje (1 ≤ R ≤ <var>10</var>
            <sup>9</sup>).
            <br />U idućih N redaka nalaze se po 4 broja, donji lijevi i gornji desni kut i-te sarme (pravokutnika) ( -
            <var>10</var>
            <sup>9</sup>≤ <var>X</var>
            <sub>i1</sub>, <var>Y</var>
            <sub>i1</sub>, <var>X</var>
            <sub>i2</sub>, <var>Y</var>
            <sub>i2</sub> ≤ <var>10</var>
            <sup>9</sup>).
          </p>
          <UlazniPodatciButtons filePath="/files/inputs/1/ulaz.txt" />

          <Title type="subtitle">Izlazni podaci</Title>
          <p className="paragraph">
            U prvom se redu nalazi K (1 ≤ K ≤ <var>10</var>
            <sup>5</sup>) - ukupan broj grabljenja sarmi.
            <br />U idućih K redaka nalaze se po dva realna broja <var>X</var>
            <sub>i</sub> i <var>Y</var>
            <sub>i</sub> ( -<var>10</var>
            <sup>9</sup> ≤ <var>X</var>
            <sub>i</sub>, <var>Y</var>
            <sub>i</sub> ≤ <var>10</var>
            <sup>9</sup>), koordinate središta šeflje i-tog grabljenja zaokružene na maksimalno 6 decimala.
          </p>

          <p className="paragraph">
            Broj bodova računa se kao <var>10</var>
            <sup>5</sup>-K. Ukoliko rješenje daje WA (niste ugrabili sve sarme), dobivate 0 bodova.
          </p>

          <div className="w-full">
            <Title type="subtitle">Primjer</Title>
            <Title type="subtitle2">Ulaz</Title>
            <pre className="paragraph w-[100%] bg-light-red p-2">{`2 2\n1 0 2 2\n3 3 4 4`}</pre>
            <Title type="subtitle2">Izlaz</Title>
            <pre className="paragraph paragraph w-[100%] bg-light-red p-2">{`1\n1.5 3`}</pre>
          </div>
          <div className="mt-16 flex justify-center">
            <img src={GeoSarme} alt="Geogebra_Sarme" className="max-h-72" />
          </div>
          <Title type="subtitle">Rješenje</Title>

          <SolutionBox number={1} />
        </ProblemPage>
      ) : (
        <ZadatakComing number={1} />
      )}
    </>
  )
}

export default FirstProblem
