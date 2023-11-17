import { Santa, Separator_1 } from '@/components'

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-hero-pattern flex h-screen w-screen items-center justify-center">
        <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-8 lg:gap-36">
          <div className="h-64 w-96 ">
            <img src={Santa} className="rounded-3xl object-cover h-72 w-full" />
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
