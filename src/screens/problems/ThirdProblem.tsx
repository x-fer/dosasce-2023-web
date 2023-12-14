import { Title, VilenjaciGraf, Vilenjaci } from '@/components'
import ProblemPage from '@/components/ProblemPage'
//import SolutionBox from '@/components/SolutionBox'
import UlazniPodatciButtons from '@/components/UlazniPodatciButtons'
import ZadatakComing from '@/components/ZadatakComing'
// import { useZadActive } from '@/utils/dates'

const ThirdProblem = () => {
  // const isZadActive = useZadActive(3)
  const isZadActive = true
  const vilenjaci = (
    <div className="h-72 rounded-t-md">
      <img src={Vilenjaci} alt="Vilenjaci" className="h-full max-h-full w-full max-w-full rounded-t-md object-cover" />
    </div>
  )

  return (
    <>
      {isZadActive ? (
        <ProblemPage image={vilenjaci}>
          <Title type="title">Vilenjaci</Title>
          <p className="paragraph">
            Svake godine uoči Božića vilenjaci u velikoj tvornici na Sjevernom polu moraju poklone s brojnih proizvodnih
            traka pakirati i stavljati na hrpe. Ove godine većina ih pomaže Djedu Božićnjaku oko LaTeX funkcija pa oni
            koji su ostali moraju raditi naporno, ali i pametno.
          </p>
          <br />
          <p className="paragraph">
            Svaka proizvodna traka kroz dan proizvodi poklone različitim tempom koji je opisan polinomom 4. stupnja (a
            <var>x</var>
            <sup>4</sup>+b<var>x</var>
            <sup>3</sup>+c<var>x</var>
            <sup>2</sup>+dx+e), gdje <b>x označava vrijeme u satima (0-24, realan broj)</b>. Broj poklona koji se
            proizvede u nekom intervalu jednak je <b>površini ispod polinoma</b> u tom intervalu (polinomi će od 0 do 24
            imati samo nenegativne vrijednosti). Broj poklona zaokružuje se na <b>manji cijeli broj</b>. Ako bi se u
            intervalu proizvelo 4.3 poklona, vilenjak bi skupio samo 4 potpuno proizvedena.
          </p>
          <br />
          <p className="paragraph">
            Jedan vilenjak u jednom trenutku može biti samo na jednoj proizvodnoj traci, a da bi se premjestio na drugu
            traku i pripremio za rad treba mu 6 minuta, to jest <b>0.1 sat</b>. Također, vilenjaci smiju dijeliti traku,
            ali tada sakupljaju jednako poklona kao i da je na traci samo jedan.
          </p>
          <br />
          <p className="paragraph">
            200 vilenjaka sad se treba pametno rasporediti na 1000 proizvodnih traka kako bi maksimizirali broj
            sakupljenih poklona u danu. Pomozite im u tom izazovu.
          </p>
          <br />
          <p className="paragraph">
            <i>Hint za srednjoškolce:</i> bacite oko malo na <b>integrale</b> (i računanje integrala u kodu). 😉
          </p>

          <Title type="subtitle">Ulazni podaci</Title>
          <p className="paragraph">
            <b>1000</b> redaka sa po <b>5</b> realnih brojeva koji predstavljaju koeficijente polinoma, gdje je 1. broj
            koeficijent uz <var>x</var>
            <sup>4</sup>. Npr. 1 2 3 4 5 predstavlja <var>x</var>
            <sup>4</sup>+2<var>x</var>
            <sup>3</sup>+3<var>x</var>
            <sup>2</sup>+4x+5
          </p>
          <UlazniPodatciButtons filePath="/files/inputs/3/ulaz.txt" title="Preuzmi ulazne podatke" />

          <Title type="subtitle">Izlazni podaci</Title>
          <p className="paragraph">
            Za svakog od 200 vilenjaka potrebno je ispisati koliko je puta promijenio traku (broj S) i potom S+1 redaka.
            U svakom od tih S+1 redaka su po dva broja x i y. x je 0-indeksirani broj proizvodne trake, a y vrijeme koje
            vilenjak provede na njoj. Npr.{' '}
            <pre className="paragraph w-[100%] bg-light-red p-2">{'2\n0 5\n1 4.8\n2 14'}</pre> znači da će vilenjak dva
            puta promijeniti traku tako da svoj radni dan započne na traci 0 i tamo provede 5 sati, zatim će od 5.1 do
            9.9 sati biti na traci 1, a od 10 do kraja dana na traci 2.
          </p>

          <div className="w-full">
            <Title type="subtitle">Primjer</Title>
            <Title type="subtitle2">Ulaz</Title>
            <p className="paragraph">
              Kada bismo imali <b>jednog</b> vilenjaka i sljedeće 2 funkcije (vidi sliku ispod):
            </p>
            <p className="paragraph ml-4">
              0<var>x</var>
              <sup>4</sup> + 0.018<var>x</var>
              <sup>3</sup> - 0.848<var>x</var>
              <sup>2</sup> + 9.641x + 19.963 (crvena)
            </p>
            <p className="paragraph  ml-4">
              -0.001<var>x</var>
              <sup>4</sup> + 0.048<var>x</var>
              <sup>3</sup> - 0.483<var>x</var>
              <sup>2</sup> + 0.75x + 22 (zelena)
            </p>
            <p className="paragraph">Ulaz bi bio: </p>
            <pre className="paragraph w-[100%] bg-light-red p-2">{`0 0.018 -0.848 9.641 19.963\n-0.001 0.048 -0.483 0.75 22`}</pre>
            <Title type="subtitle2">Izlaz</Title>
            <p className="paragraph">
              Vilenjak bi mogao biti na crvenoj prvih 14.8 sati, a onda od 14.9 do 24 (9.1 sat) na zelenoj. Ispis bi u
              tom slučaju bio:
            </p>
            <pre className="paragraph w-[100%] bg-light-red p-2">{`2\n0 14.8\n1 9.1`}</pre>
            <p className="paragraph">Te bi sakupio 650 + 584 = 1234 poklona.</p>
          </div>
          <div className="mt-16 flex justify-center">
            <img src={VilenjaciGraf} alt="Graf rada vilenjaka" className="max-h-72" />
          </div>

          <Title type="subtitle">Rješenje</Title>

          <p className="inline-block pb-2 text-xl">
            Slanje rješenja trenutno ne radi, ali možete ih probati ručno testirati{' '}
            <a href="/files/inputs/3/vilenjaci_checker.zip" className="text-red underline" download={true}>
              ovdje
            </a>{' '}
            (unutra su i upute - README.md).
          </p>

          {/*<SolutionBox number={3} />*/}
        </ProblemPage>
      ) : (
        <ZadatakComing number={3} />
      )}
    </>
  )
}

export default ThirdProblem
