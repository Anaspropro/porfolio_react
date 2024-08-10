import anas from "../assets/images/anas.jpg"
import Button from "../Components/button"
import arrow from "../assets/images/right-arrow.png"
import { Link } from "react-router-dom"
import { Navbar } from "../Components/Navbar"

const Index = () => {
  return (
    <div className="index bg-black md:bg-home">
      <Navbar />
      <div className="flex flex-col md:flex-row md:gap-20 items-center justify-center px-6 md:px-40  ">
       <img src={anas} alt="" className="hero-img rounded-3xl my-5" />
       <div className="flex flex-col text-center md:items-start items-center md:justify-start p-6">
         <h1 className="font-bold text-5xl text-red-700">I&apos;M ANAS ALIU.</h1>
         <h1 className="font-bold text-5xl text-white mb-2">Front-End Developer</h1>    
         <p className="text-[#c3c1c1] font-thin md:text-start text-xl my-8 space-y-3">
           I&apos;m a Nigerian based front-end developer focused on developing clean and user-friendly experience, I am passionate about building excellent software that improves the live of those around me.
         </p>
         <Link to="/about">  
           <Button text={"MORE ABOUT ME"} image={arrow} />
         </Link>
       </div>
      </div>
   </div>
  )
}

export default Index