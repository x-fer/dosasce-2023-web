import { Separator_1 } from '@/components'
import santa from './../assets/santa.svg'

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-hero-pattern flex h-screen w-screen items-center justify-center">
        <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-8 lg:gap-36">
          <div className="w-[350px] h-[255px] lg:w-[550px] lg:h-[400px] px-4 bg-blue rounded-3xl lg:rounded-[60px] flex justify-center items-center shadow-xl">
            <img src={santa} className="w-full h-auto" alt="Slika djeda božičnjaka" />
          </div>

          <div className="font-monomaniac flex flex-col text-red">
            <p className="text-2xl">Dobrodošli na</p>

            <p className="text-7xl">došašće++</p>
          </div>
        </div>
      </div>
      <img src={Separator_1} />
    </div>
  )
}

export default Home
