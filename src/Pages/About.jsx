import { Navbar } from "../Components/Navbar"
import Button from "../Components/button"
import download from "../assets/images/downloads.png"


const About = () => {
  return (
    <div className="">
      <Navbar />
      <h1 className="text-5xl text-yellow-500 font-extrabold text-center my-10"><span className="text-white">ABOUT</span> ME</h1>
      <div className="">
        <div className="px-5">
          <h1 className="font-bold text-4xl text-white">PERSONAL INFOS</h1>
          <div className=" flex my-10 ">
            <ul className="grid grid-cols-2 gap-x-8 md:gap-x-20">
              <li className="flex flex-col md:flex-row items-baseline my-2"><span className=" text-xl md:text-2xl text-gray font-bold">First Name:&nbsp;</span><span className="text-white font-semibold text-lg">Anas</span></li>
              <li className="flex flex-col md:flex-row items-baseline my-2"><span className=" text-xl md:text-2xl text-gray font-bold">Last Name:&nbsp;</span><span className="text-white font-semibold text-lg">Aliu</span></li>
              <li className="flex flex-col md:flex-row items-baseline my-2"><span className=" text-xl md:text-2xl text-gray font-bold">Age:&nbsp;</span><span className="text-white font-semibold text-lg">25 Years</span></li>
              <li className="flex flex-col md:flex-row items-baseline my-2"><span className=" text-xl md:text-2xl text-gray font-bold">Nationality:&nbsp;</span><span className="text-white font-semibold text-lg">Nigerian</span></li>
              <li className="flex flex-col md:flex-row items-baseline my-2"><span className=" text-xl md:text-2xl text-gray font-bold">Freelance:&nbsp;</span><span className="text-green-400 font-semibold text-lg">Available</span></li>
              <li className="flex flex-col md:flex-row items-baseline my-2"><span className=" text-xl md:text-2xl text-gray font-bold">Address:&nbsp;</span><span className="text-white font-semibold text-lg">Nigeria</span></li>
              <li className="flex flex-col md:flex-row items-baseline my-2"><span className=" text-xl md:text-2xl text-gray font-bold">Phone:&nbsp;</span><a href="tel:+2349034272822" className="text-white font-semibold text-lg">09034272822</a></li>
              <li className="flex flex-col md:flex-row items-baseline my-2"><span className=" text-xl md:text-2xl text-gray font-bold">Email:&nbsp;</span><a href="mailto:aliuanas004@gmail.com" className="flex flex-col md:flex-row text-white font-semibold text-lg pr-4">aliuanas004<span>@gmail.com</span></a></li>
              <li className="flex flex-col md:flex-row items-baseline my-2"><span className=" text-xl md:text-2xl text-gray font-bold">Language:&nbsp;</span><span className="text-white font-semibold text-lg">English, Arabic</span></li>
              <li className="flex flex-col md:flex-row items-baseline my-2"><span className=" text-xl md:text-2xl text-gray font-bold">Language:&nbsp;</span><span className="text-white font-semibold text-lg">English, Arabic</span></li>
            </ul>
          </div>
        </div>

        <div>

        </div>

        <Button text={"Download CV"} image={download} />
      </div>
    </div>
  )
}

export default About