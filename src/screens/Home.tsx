import {
  Background,
  Footer,
  Informations,
  Partners,
  Separator_1,
  Separator_2,
  Separator_3,
  Timeline,
} from '@/components'
import santa from './../assets/santa.svg'

const Home = () => {
  return (
    <main className="z-20 mt-[-40px] flex h-full flex-col items-center">
      <Background>
        <div className="bg-hero-pattern flex h-screen w-screen items-center justify-center">
          <div className="flex flex-col justify-start rounded-3xl bg-white p-12 pb-10 lg:flex-row lg:items-center lg:gap-36 lg:rounded-[60px] lg:pr-10">
            <div className="bg-santa-dark flex h-[255px] w-[350px] items-center justify-center rounded-3xl px-4 shadow-xl lg:h-[400px] lg:w-[550px] lg:rounded-[60px]">
              <img src={santa} className="h-auto w-full select-none" alt="Slika djeda božičnjaka" />
            </div>

            <div className="font-monomaniac flex flex-col text-red">
              <p className="text-2xl">Dobrodošli na</p>

              <p className="text-7xl">došašće++</p>
            </div>
          </div>
        </div>
      </Background>

      <img src={Separator_1} />

      <Timeline />

      <img src={Separator_2} />

      <Informations />

      <img src={Separator_3} />

      <Partners />
      <Footer />
    </main>
  )
}

export default Home
