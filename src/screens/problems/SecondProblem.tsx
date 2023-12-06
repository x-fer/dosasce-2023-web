import { Title, Pisma } from '@/components'
import FileUploadForm from '@/components/FileUploadForm'
import ProblemPage from '@/components/ProblemPage'
import UlazniPodatciButtons from '@/components/UlazniPodatciButtons'
import ZadatakComing from '@/components/ZadatakComing'
// import { useZadActive } from '@/utils/dates'

const SecondProblem = () => {
  // const isZadActive = useZadActive(2)
  const pisma = (
    <div className="h-72 rounded-t-md">
      <img src={Pisma} alt="Pisma" className="h-full max-h-full w-full max-w-full rounded-t-md object-cover" />
    </div>
  )

  const isZadActive = true

  return (
    <>
      {isZadActive ? (
        <ProblemPage image={pisma}>
          <Title type="title">Božićna pisma</Title>
          <p className="paragraph">
            Ivanova mama Marinka već je godinama zaposlena kod Djeda Božićnjaka. Kako je ove godine odlučila napraviti
            gomilu sarmi, nadala se da će moći od Djeda dobiti par slobodnih dana oko Božića, ali Djed nije imao
            razumijevanja. Navodno je bitnija sreća neke tamo djece nego njezinog Ivana.
          </p>
          <br />
          <p className="paragraph">
            Kako bi ga naučila pameti, Marinka je odlučila sva pisma koja Djed dobije šifrirati i nakon toga{' '}
            <a href="https://docs.python.org/3/library/base64.html" className="text-red underline" target="_blank">
              base64
            </a>{' '}
            (vidi primjer koda ispod) kodirati pa nek se on muči s dešifriranjem. Opće je poznato da je na Sjevernom
            Polu internet katastrofalan pa Marinka želi da pisma budu što kraća moguća kako bi ipak malo ranije pobjegla
            doma s posla. Programiranje joj nikad nije najbolje išlo pa moli vas za pomoć.
          </p>
          <br />
          <p className="paragraph">
            Vi ste Marinkin dobar prijatelj i ne želite ju iznevjeriti, ali ipak imate na umu dobrobit djece cijelog
            svijeta. U tom sukobu interesa, odlučili ste napisati <strong>program</strong> koji može raditi u dva
            načina:
          </p>
          <ul className="paragraph ml-4 mt-2 list-inside list-disc">
            <li>
              <b>compress</b> (komprimira ulazni tekst) - način koji komprimira (šifrira) ulaznu datoteku i ispunjava
              Marinkinu želju
            </li>
            <li>
              <b>decompress</b> (raspakira komprimirani tekst) - način koji dekomprimira (dešifrira) ulaznu datoteku
              (koji ćete potajno dati Djedu kad postane očajan)
            </li>
          </ul>
          <br />
          <p className="paragraph">
            Na raspolaganju Vam je <strong>manji dio teksta</strong> svih pisama koja su ove godine napisana Djedu iz
            kojeg pokušajte izvući statistiku. Iz nekog Vama, a i nama nepoznatog razloga, pisma sadrže{' '}
            <a
              href="https://www.geeksforgeeks.org/maths-commands-in-latex/"
              className="text-red underline"
              target="_blank"
            >
              LaTex
            </a>{' '}
            formule. Pretpostavite da se ostatak teksta pisama ponaša jednako vašem uzorku.
          </p>
          <UlazniPodatciButtons filePath="/files/inputs/2/ulaz.txt" title="Preuzmi ulazne podatke" />

          <Title type="subtitle">Primjer programa</Title>
          <p className="paragraph">Moguće je koristiti jezike: C++, Java, Python, C...</p>
          <pre className="paragraph w-[100%] bg-light-red p-2">
            {`import base64\nmode = input()\nif mode == "compress":
            data = input()
            data = base64.b64decode(data.encode()).decode()  # ovo prevodi ulaz u Latex oblik
            # kompresiranje data
            print(base64.b64encode(data.encode()).decode(), flush=True)\nelif mode == "decompress":
            data = input()
            data = base64.b64decode(data.encode()).decode()
            # dekompresiranje data
            print(base64.b64encode(data.encode()).decode(), flush=True)\n\n# OBAVEZNO DODATI OVO NA KRAJ:\nwhile True:
            input()`}
          </pre>

          <Title type="subtitle">Ulazni podaci</Title>
          <p className="paragraph">
            U prvom se redu nalazi mod rada - "compress" ili "decompress". <br />
            Nakon toga se nalazi <b>base64 kodirani tekst</b> pisama koji trebate komprimirati / dekomprimirati
            (veličina teksta nije poznata).
          </p>
          <Title type="subtitle">Izlazni podaci</Title>
          <p className="paragraph">
            Ispišite <b>base64 kodirani tekst</b> nakon komprimiranja / dekomprimiranja (ovisno o tipu rada).{' '}
            <strong>Broj bodova je veći </strong> što je kompresija bolja odnosno komprimirani{' '}
            <strong>tekst manji</strong> :D
          </p>
          <p className="paragraph mt-4">
            <b>Napomena:</b>{' '}
            <span className="text-red">
              NIJE dozvoljeno korištenje nikakvih libraryja za kompresiju (npr. <b>gzip</b>).
            </span>{' '}
            Konačan broj bodova odgovara duljini datoteke u bajtovima. Naravno, uvjet je da je tekst komprimiran u
            “compress” načinu rada moguće raspakirati u izvorni tekst s “decompress” načinom rada.{' '}
            <b>U protivnom rješenje ovog zadatka nije valjano.</b>
          </p>

          <Title type="subtitle">Rješenje</Title>
          <FileUploadForm />
          <div>
            <a
              href={`/leaderboard/2`}
              className="paragraph text-md cursor-pointer font-semibold leading-7 text-red underline"
            >
              Rang lista!
            </a>
          </div>
        </ProblemPage>
      ) : (
        <ZadatakComing number={2} />
      )}
    </>
  )
}

export default SecondProblem
