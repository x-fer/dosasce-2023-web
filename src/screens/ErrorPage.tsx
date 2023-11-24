import { Background } from '@/components'

const ErrorPage = () => {
  return (
    <Background>
      <main className="flex h-full w-full flex-grow items-center justify-center  px-4 py-12 sm:py-16 lg:px-8">
        <section className="flex h-full w-full items-center justify-center rounded-xl bg-white px-4">
          <div className="text-center">
            <p className="text-xl font-semibold text-red">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Stranica ne postoji</h1>
            <p className="paragraph mt-6 text-base leading-7 text-gray-600">
              Nismo mogli pronaći stranicu koju tražite.
            </p>
            <div className="mt-10">
              <a href="/" className="paragraph text-sm font-semibold leading-7 text-red">
                <span aria-hidden="true">&larr;</span> Vratite se na početnu stranicu
              </a>
            </div>
          </div>
        </section>
      </main>
    </Background>
  )
}

export default ErrorPage
