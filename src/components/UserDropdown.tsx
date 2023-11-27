import { UserContext } from '@/App'
import { useContext } from 'react'

const UserDropdown = () => {
  const { user } = useContext(UserContext)

  return <div>{user?.name}</div>
}

export default UserDropdown
