import { Title } from '@/components'
import ProblemPage from '@/components/ProblemPage'
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
          {/* Majo promijeni ime ako zelis */}
          <p className="paragraph">
            Zli Vilenjak Marinko nadao se da će povodom 100-te godišnjice zaposlenja u Djedovoj tvornici napokon imati
            par slobodnih dana oko Božića, ali Djed nije imao razumijevanja. Navodno je bitnija sreća neke tamo djece
            nego neplaćeni godišnji.
          </p>
          <br />
          <p className="paragraph">
            Kako bi ga naučio pameti, Zli Vilenjak Marinko je odlučio sva pisma koja Djed dobije komprimirati pa nek se
            on muči s raspakiranjem. Opće je poznato da je na Sjevernom Polu internet katastrofalan pa Zli Patuljak želi
            da pisma budu što kraća moguća kako bi ipak malo ranije pobjegao doma s posla. Programiranje mu nikad nije
            najbolje išlo pa moli vas da mu pomognete.
          </p>
          <br />
          <p className="paragraph">
            Vi ste Marinkov dobar prijatelj i ne želite ga iznevjeriti, ali ipak imate na umu dobrobit djece cijelog
            svijeta. U tom sukobu interesa, odlučili ste napisati program koji može raditi u dva načina:
          </p>
          <ul className="paragraph ml-4 mt-2 list-inside list-disc">
            <li>
              <b>compress</b> (komprimira ulazni tekst) način koji komprimira ulaznu datoteku koji dajete Patuljku i
              ispunjavate njegovu želju
            </li>
            <li>
              <b>decompress </b> (raspakira komprimirani tekst) način koji dekomprimira ulaznu datoteku te ga potajno
              dajete Djedu kad postane očajan
            </li>
          </ul>
          <Title type="subtitle">Ulazni podaci</Title>
          <p className="paragraph">
            Na raspolaganju Vam je 10% teksta svih pisama koja su ove godine napisana Djedu (i iz nekog Vama a i nama
            nepoznatog razloga sadrže Latex formule) iz kojeg pokušajte izvući statistiku. Pretpostavite da se ostatak
            teksta pisama ponaša jednako.
          </p>
          <Title type="subtitle">Izlazni podaci</Title>
          <p className="paragraph">Veličina komprimirane datoteke u bajtovima. Što manje to bolje :D</p>
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
          </p>
        </ProblemPage>
      ) : (
        <ZadatakComing number={2} />
      )}
    </>
  )
}

export default SecondProblem
