import { Title } from '@/components'
import FileUploadForm from '@/components/FileUploadForm'
import ProblemPage from '@/components/ProblemPage'
import UlazniPodatciButtons from '@/components/UlazniPodatciButtons'
import ZadatakComing from '@/components/ZadatakComing'
// import { useZadActive } from '@/utils/dates'

const SecondProblem = () => {
  // const isZadActive = useZadActive(2)
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
          <p className="paragraph">
            Kako bi ga naučila pameti, Marinka je odlučila sva pisma koja Djed dobije šifrirati pa nek se on muči s
            dešifriranjem. Opće je poznato da je na Sjevernom Polu internet katastrofalan pa Marinka želi da pisma budu
            što kraća moguća kako bi ipak malo ranije pobjegla doma s posla. Programiranje joj nikad nije najbolje išlo
            pa moli vas za pomoć.
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
            Na raspolaganju Vam je <strong>10% teksta</strong> svih pisama koja su ove godine napisana Djedu iz kojeg
            pokušajte izvući statistiku. Iz nekog Vama, a i nama nepoznatog razloga, pisma sadrže{' '}
            <a
              href="https://www.geeksforgeeks.org/maths-commands-in-latex/"
              className="text-red underline"
              target="_blank"
            >
              LaTex
            </a>{' '}
            formule. Pretpostavite da se ostatak teksta pisama ponaša jednako vašem uzorku.
          </p>
          <UlazniPodatciButtons filePath="/files/inputs/1/ulaz.txt" title="Preuzmi ulazne podatke" />

          <Title type="subtitle">Primjer programa</Title>
          <p className="paragraph">Moguće je koristiti jezike: C++, Java, Python, C...</p>
          <pre className="paragraph w-[100%] bg-light-red p-2">
            {`cin << modRada\ncin << tekst\nif (modRada == "compress")
        ... komprimiraj teksta
        cout << komprimiraniTekst\nelse
        ... dekomprimiraj tekst
        cout << dekomprimiraniTekst`}
          </pre>

          <Title type="subtitle">Ulazni podaci</Title>
          <p className="paragraph">
            U prvom se redu nalazi mod rada - "compress" ili "decompress". <br />
            Nakon toga se nalazi tekst pisama koji trebate komprimirati / dekomprimirati (veličina teksta nije poznata).
          </p>
          <Title type="subtitle">Izlazni podaci</Title>
          <p className="paragraph">
            Ispišite tekst nakon komprimiranja / dekomprimiranja (ovisno o tipu rada). <strong>Broj bodova</strong>{' '}
            odgovara veličini komprimirane datoteke u bajtovima, što manje to bolje :D
          </p>
          {/*
          <Title type="subtitle">Primjer</Title>
          <Title type="subtitle2">Ulaz</Title>
          <p className="paragraph mb-2">
            U slučaju programa koji se prevode (pošaljite izvorni kod koji će biti preveden prilikom provjere)
          </p>
          <pre className="paragraph w-[100%] bg-light-red p-2">{`$  ./<vas_file> -m compress < input.txt > vas_output.txt`}</pre>
          <pre className="paragraph w-[100%] bg-light-red p-2">{`$  ./<vas_file> -m decompress < vas_output.txt > output.txt`}</pre>
          <p className="paragraph my-2">U slučaju programa koji se interpretiraju (npr. Python)</p>
          <pre className="paragraph w-[100%] bg-light-red p-2">{`$  python3 <vas_file> -m compress < input.txt > vas_output.txt`}</pre>
          <pre className="paragraph w-[100%] bg-light-red p-2">{`$  python3 <vas_file> -m decompress < vas_output.txt > output.txt`}</pre>
          <p className="paragraph mt-2">
            Nakon čega će se provjeriti je li input.txt jednak output.txt i ako je dobit ćete odgovarajući izlaz koji
            predstavlja vaše bodove, u protivnom vraća se greška.
          </p>
          <Title type="subtitle2">Izlaz</Title>
          <pre className="paragraph paragraph w-[100%] bg-light-red p-2">{`$  Rezultat je 141116`}</pre>
          <p className="paragraph mt-4">
            <b>Napomena:</b> Način u kojem će vaše rješenje raditi predaje se u obliku argumenata pri pokratanju
            programa. Evaluator će za komprimiranje dodati argumente -m compress, a za dekomprimiranje argumente -m
            decompress. Izlaz programa u načinu za komprimiranje se ubacuje u gzip te konačan broj bodova odgovara
            duljini zippane datoteke. Naravno uvjet je da sav tekst komprimiran sa u “compress” načinu rada mora biti
            moguće raspakirati u izvorni tekst sa “decompress” načinom rada u{' '}
            <b>protivnom rješenje ovog zadatka nije valjano.</b>
          </p>*/}
          <p className="paragraph mt-4">
            <b>Napomena:</b> Izlaz programa u načinu za komprimiranje se ubacuje u <strong>gzip</strong> te konačan broj
            bodova odgovara duljini zippane datoteke. Naravno, uvjet je da je tekst komprimiran u “compress” načinu rada
            moguće raspakirati u izvorni tekst s “decompress” načinom rada.{' '}
            <b>U protivnom rješenje ovog zadatka nije valjano.</b>
          </p>

          <Title type="subtitle">Rješenje</Title>
          <FileUploadForm />
        </ProblemPage>
      ) : (
        <ZadatakComing number={2} />
      )}
    </>
  )
}

export default SecondProblem
