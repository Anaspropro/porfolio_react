import Skills from "../Components/Skills"
import Button from "../Components/button"
import download from "../assets/images/download.png"


const About = () => {
  return (
    <div className="bg-black">
      <div className="px-2 md:px-5 lg:px-12">
        <h1 className="text-5xl py-12 text-yellow-600 font-extrabold text-center"><span className="text-white">ABOUT</span> ME</h1>
                
        <section className="grid lg:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-0 md:px-5 lg:px-14">
          <ul className="grid grid-cols-2 px-2 md:gap-5">
            <h1 className="font-bold mb-2 text-2xl text-white col-span-2">PERSONAL INFOS</h1>
            <li className="flex flex-col md:flex-row items-baseline "><span className=" text-base text-[#4f4b4b] font-bold">First Name:&nbsp;</span><span className="text-white font-semibold text-sm md:text-lg">Anas</span></li>
            <li className="flex flex-col md:flex-row items-baseline "><span className=" text-base text-[#4f4b4b] font-bold">Last Name:&nbsp;</span><span className="text-white font-semibold text-sm md:text-lg">Aliu</span></li>
            <li className="flex flex-col md:flex-row items-baseline "><span className=" text-base text-[#4f4b4b] font-bold">Age:&nbsp;</span><span className="text-white font-semibold text-sm md:text-lg">25 Years</span></li>
            <li className="flex flex-col md:flex-row items-baseline "><span className=" text-base text-[#4f4b4b] font-bold">Nationality:&nbsp;</span><span className="text-white font-semibold text-sm md:text-lg">Nigerian</span></li>
            <li className="flex flex-col md:flex-row items-baseline "><span className=" text-base text-[#4f4b4b] font-bold">Freelance:&nbsp;</span><span className="text-green-400 font-semibold text-sm md:text-lg">Available</span></li>
            <li className="flex flex-col md:flex-row items-baseline "><span className=" text-base text-[#4f4b4b] font-bold">Address:&nbsp;</span><span className="text-white font-semibold text-sm md:text-lg">Nigeria</span></li>
            <li className="flex flex-col md:flex-row items-baseline "><span className=" text-base text-[#4f4b4b] font-bold">Phone:&nbsp;</span><a href="tel:+2349034272822" className="text-white font-semibold text-sm md:text-lg">09034272822</a></li>
            <li className="flex flex-col md:flex-row items-baseline "><span className=" text-base text-[#4f4b4b] font-bold">Email:&nbsp;</span><a href="mailto:aliuanas004@gmail.com" className="flex flex-col md:flex-row text-white font-semibold text-sm md:text-lg pr-4">aliuanas004@gmail.com</a></li>
            <li className="flex flex-col md:flex-row items-baseline "><span className=" text-base text-[#4f4b4b] font-bold">Language:&nbsp;</span><span className="text-white font-semibold text-sm md:text-lg">English, Arabic</span></li>
            <li className="flex flex-col md:flex-row items-baseline "><span className=" text-base text-[#4f4b4b] font-bold">Language:&nbsp;</span><span className="text-white font-semibold text-sm md:text-lg">English, Arabic</span></li>
            <div className="my-3 col-span-2">
              <Button text={"Download CV"} image={download} />
            </div>
          </ul>

          <div className="grid grid-cols-2 gap-2 md:gap-5">
            <div className="border px-3 md:px-5 col-span-1 py-6">
              <h1 className="flex text-4xl font-bold text-start text-yellow-600 align-text-top">
                3 <span className="text-xl font-extrabold">+</span>
              </h1>
              <p className="font-medium md:font-semibold text-base md:text-xl flex gap-2 text-white md:px-4">
                <span className="text-sm md:text-2xl font-extralight">&#119062;</span>
                YEARS OF EXPERIENCE
              </p>
            </div>
            <div className="border px-3 md:px-5 col-span-1 py-6">
              <h1 className="flex text-4xl font-bold text-start text-yellow-600 align-text-top">
                5 <span className="text-xl font-extrabold">+</span>
              </h1>
              <p className="font-medium md:font-semibold text-base md:text-xl flex gap-2 text-white md:px-4">
                <span className="text-sm md:text-2xl font-extralight">&#119062;</span>
                COMPLETED PROJECTS
              </p>
            </div>
            <div className="border px-3 md:px-5 col-span-1 py-6">
              <h1 className="flex text-4xl font-bold text-start text-yellow-600 align-text-top">
                12 <span className="text-xl font-extrabold">+</span>
              </h1>
              <p className="font-medium md:font-semibold text-base md:text-xl flex gap-2 text-white md:px-4">
                <span className="text-sm md:text-2xl font-extralight">&#119062;</span>
                YEARS OF EXPERIENCE
              </p>
            </div>
            <div className="border px-3 md:px-5 col-span-1 py-6">
              <h1 className="flex text-4xl font-bold text-start text-yellow-600 align-text-top">
                12 <span className="text-xl font-extrabold">+</span>
              </h1>
              <p className="font-medium md:font-semibold text-base md:text-xl flex gap-2 text-white md:px-4">
                <span className="text-sm md:text-2xl font-extralight">&#119062;</span>
                YEARS OF EXPERIENCE
              </p>
            </div>
          </div>
        </section>

        <Skills />

      </div>        
    </div>
  )
}

export default About