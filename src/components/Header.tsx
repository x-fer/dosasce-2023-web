// import { GoogleLogin } from '@react-oauth/google'

const Header = () => {
  // const onSuccess = (response: unknown) => {
  //   console.log(response)
  // }

  return (
    <header className="sticky top-0 z-50 flex min-h-[60px] w-full items-center justify-between bg-red px-8 text-white shadow-2xl">
      <a href="/" className="cursor-pointer select-none text-2xl">
        došašće++
      </a>
      {/* <GoogleLogin onSuccess={onSuccess} shape="pill" /> */}
    </header>
  )
}

export default Header
