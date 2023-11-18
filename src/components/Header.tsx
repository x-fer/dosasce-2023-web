import { GoogleLogin } from '@react-oauth/google'

const Header = () => {
  const onSuccess = (response: unknown) => {
    console.log(response)
  }

  return (
    <div className="sticky top-0 z-50 flex min-h-[80px] w-screen items-center justify-between bg-red px-8 text-white">
      <a href="/" className="cursor-pointer select-none text-4xl tracking-widest">
        došašće++
      </a>
      <GoogleLogin onSuccess={onSuccess} shape="circle" />
    </div>
  )
}

export default Header
