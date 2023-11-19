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

const Home = () => {
  return (
    <main className="z-20 mt-[-40px] flex h-full flex-col items-center">
      <Background>
        <div className="flex h-screen w-full items-center justify-center">
          <div className="flex flex-col justify-start gap-12 rounded-3xl p-12 pb-10 lg:flex-row lg:items-center lg:gap-36 lg:rounded-[60px] lg:pr-10">
            <img
              src="/hero-section/dida-plavi-no-text.png"
              className="h-[280px] w-[350px] select-none rounded-3xl object-cover"
              alt="Slika djeda božičnjaka"
            />

            <div className="font-monomaniac flex flex-col text-red">
              <p className="text-2xl">Dobrodošli na</p>

              <p className="text-7xl">došašće++</p>
              <p className="text-xl">Božićno natjecanje: Kodirajte čaroliju!</p>

              {/* <button className="mt-[8px] w-max rounded-[8px] border-[2px] border-red px-[16px] pb-[2px] hover:opacity-75">
                Call to action!
              </button> */}
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
