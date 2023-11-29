import { addToContest, submitUserCategory } from '@/api/repository'
import ProblemPage from '@/components/ProblemPage'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/App'
import { useNavigate } from 'react-router-dom'
import { uzrasti } from '@/utils/kontestis'
import ErrorPage from './ErrorPage'

const Uzrast = () => {
  const [uzrast, setUzrast] = useState<string>()
  const { isLoggedIn, user } = useContext(UserContext)
  const [showUzrast, setShowUzrast] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleClick = () => {
    if (!isLoggedIn) return

    submitUserCategory(user!.email, uzrast!)
      .then(res => res.json())
      .then(data => {
        if (data.category) {
          addToContest().then(() => navigate('/'))
        }
      })
  }

  useEffect(() => {
    if (isLoggedIn && user?.hasSetCategory) {
      setShowUzrast(true)
    }
  }, [isLoggedIn, user?.hasSetCategory])

  return (
    <>
      {showUzrast ? (
        <ProblemPage>
          <div className="flex-grow sm:flex-col sm:items-center sm:justify-center md:p-10">
            <h1 className="mb-6 text-4xl md:mb-10 md:text-7xl">Uzrast natjecatelja</h1>

            <div>
              <label className="paragraph text-lg text-gray-600 md:text-xl">
                Molimo Vas da odaberte svoj uzrast kako biste se mogli natjecati.
                <br />
                Prilikom dodjela nagrada provjerit ćemo ispravnost ovih informacija.
                <br />
                Ukoliko se utvrdi da ste odabrali krivi uzrast, bit ćete diskvalificirani.
              </label>
              <fieldset className="mt-4 md:mt-8">
                <legend className="sr-only">Vaš uzrast</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                  {uzrasti.map(uzrast => (
                    <div key={uzrast.id} className="flex items-center">
                      <input
                        id={uzrast.id}
                        name="uzrast-select"
                        type="radio"
                        onChange={() => setUzrast(uzrast.title)}
                        className="h-4 w-4 border-gray-300 text-red focus:ring-red"
                      />
                      <label htmlFor={uzrast.id} className="mb-1 ml-3 block text-lg font-medium text-black md:text-xl">
                        {uzrast.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>

            <button
              type="button"
              title="Potvrdi svoj uzrast"
              className="mt-4 h-10 w-fit whitespace-nowrap rounded-md border-2 border-solid border-red bg-red px-2 text-center text-lg text-white disabled:cursor-not-allowed disabled:border-red disabled:bg-white disabled:text-red md:mt-8 md:h-12 md:text-2xl"
              onClick={handleClick}
              disabled={uzrast === undefined || !isLoggedIn}
            >
              Potvrdite svoj uzrast
            </button>
          </div>
        </ProblemPage>
      ) : (
        <ErrorPage />
      )}
    </>
  )
}

export default Uzrast
