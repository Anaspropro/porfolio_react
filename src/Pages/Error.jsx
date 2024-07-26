import { Navbar } from "../Components/Navbar"


const Error = () => {
  return (
    <div className="flex flex-col h-screen text-yellow-500">
      <Navbar />
      <div className=" text-center items-center justify-center">
        <p>404</p>
        <p>Page not found</p>
      </div>
    </div>
  )
}

export default Error