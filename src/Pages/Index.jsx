import anas from "../assets/images/anas.jpg"
import Button from "../Components/button"
import arrow from "../assets/images/right-arrow.png"
import { Link } from "react-router-dom"

const Index = () => {
  return (
   <div className="flex flex-col md:flex-row md:gap-10 items-center justify-center px-3 md:px-20 h-screen bg-black ">
    <img src={anas} alt="" className="hero-img rounded-3xl left-10 top-10 my-9" />
    <div className="flex flex-col text-center items-center justify-center my-9 p-6">
      <h1 className="font-bold text-4xl text-yellow-500">I&apos;M ANAS ALIU.</h1>
      <h1 className="font-bold text-4xl text-white mb-2">Front-End Developer</h1>
      
      <p className="text-white font-normal text-xs my-5 space-y-3">
        I&apos;m a Nigerian based front-end developer focused on developing clean and user-friendly experience, I am passionate about building excellent software that improves the live of those around me.
      </p>
      <Link to="/about">  
        <Button text={"MORE ABOUT ME"} image={arrow} />
      </Link>
    </div>
   </div>
  )
}

export default Index