import { UserContext } from '@/App'
import { useContext } from 'react'

const UserDropdown = ({ logOut }: { logOut: () => void }) => {
  const { user } = useContext(UserContext)

  return (
    <button onClick={logOut} className="rounded-full border-[3px] border-white hover:border-dark-white">
      <img src={user?.avatar} className="h-10 w-10 rounded-full" />
    </button>
  )
}

export default UserDropdown
