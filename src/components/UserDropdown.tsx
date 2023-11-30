import { UserContext } from '@/App'
import { useContext, useState } from 'react'

const UserDropdown = ({ logOut }: { logOut: () => void }) => {
  const { user } = useContext(UserContext)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(o => !o)}
        className="rounded-full border-[3px] border-white hover:border-dark-white"
      >
        <img src={user?.avatar} className="h-10 w-10 rounded-full" />
      </button>
      {isOpen && (
        <div
          className="absolute right-0 top-14 flex h-14 w-32 items-center justify-center rounded-bl-xl bg-red text-white hover:underline"
          onClick={logOut}
        >
          Log out
        </div>
      )}
    </>
  )
}

export default UserDropdown
