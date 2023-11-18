import { GoogleLogin } from '@react-oauth/google'

const Header = () => {
  const onSuccess = (response: unknown) => {
    console.log(response)
  }

  return (
    <div className="sticky top-0 z-50 flex w-screen justify-between bg-red p-5 text-xl text-white">
      <div className="tracking-widest">došašće++</div>
      <GoogleLogin onSuccess={onSuccess} shape="circle" />
    </div>
  )
}

export default Header
