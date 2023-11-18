import { Informations, Partners, Separator_1, Separator_2, Separator_3, Timeline } from '@/components'
import santa from './../assets/santa.svg'

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-screen w-screen items-center justify-center bg-hero-pattern">
        <div className="flex flex-col justify-start gap-8 lg:flex-row lg:items-center lg:gap-36">
          <div className="flex h-[255px] w-[350px] items-center justify-center rounded-3xl bg-blue px-4 shadow-xl lg:h-[400px] lg:w-[550px] lg:rounded-[60px]">
            <img src={santa} className="h-auto w-full" alt="Slika djeda božičnjaka" />
          </div>

          <div className="font-monomaniac flex flex-col text-red">
            <p className="text-2xl">Dobrodošli na</p>

            <p className="text-7xl">došašće++</p>
          </div>
        </div>
      </div>

      <img src={Separator_1} />

      <Timeline />

      <img src={Separator_2} />

      <Informations />

      <img src={Separator_3} />

      <Partners />
    </div>
  )
}

export default Home
