import {
  Background,
  Contact,
  Footer,
  Informations,
  Organisators,
  Partners,
  PartnersLogos,
  Separator,
  Timeline,
} from '@/components'
import OrganisatorsLogos from '@/components/OrganisatorsLogos'

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

              <p className="mt-[-12px] text-7xl">došašće++</p>
              <p className="text-xl">Božićno natjecanje: Kodirajte čaroliju!</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-red p-5 pt-9 text-center text-white">
          <p className="text-xl md:text-3xl">Predavanje: Algoritmi kompresije</p>
          <br />
          <p className="paragraph text-lg md:text-xl">Ponedjeljak 11. prosinca, 18:00h (FER, A202)</p>
          <p className="text-md md:text-lg">
            <em>Doc.dr.sc. Marko Đurasević </em>
          </p>
        </div>
      </Background>

      <Separator />

      <Timeline />

      <Separator />

      <Informations />

      <Separator />

      <Organisators />
      <OrganisatorsLogos />

      <Separator />

      <Partners />
      <PartnersLogos />

      <Separator />

      <Contact />

      <Footer />
    </main>
  )
}

// mozda dodati separator prije parnera, idk

export default Home
