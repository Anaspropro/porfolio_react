

const About = () => {
  return (
    <div className="px-10">
      <h1 className="text-5xl text-yellow-500 font-extrabold text-center my-10"><span className="text-white">ABOUT</span> ME</h1>
      <div className="grid md:grid-cols-2 text-3xl my-20">
        <div className="cols-span-2 px-5">
          <h1 className="font-bold text-4xl text-white">PERSONAL INFOS</h1>
          <div className="flex gap-20 my-10">
            <div className="">
              <h1 className="text-2xl my-4 text-gray font-bold">FIrst Name: <span className="text-white font-semibold text-xl">Anas</span></h1>
              <h1 className="text-2xl my-4 text-gray font-bold">Age: <span className="text-white font-semibold text-xl">27 Years</span></h1>  
              <h1 className="text-2xl my-4 text-gray font-bold">Freelance: <span className="text-white font-semibold text-xl">Available</span></h1>  
              <h1 className="text-2xl my-4 text-gray font-bold">Phone: <a href="tel:+2349034272822" className="text-white font-semibold text-xl"></a></h1>
              <h1 className="text-2xl my-4 text-gray font-bold">Languge: <span className="text-white font-semibold text-xl">English, Arabic</span></h1>
            </div>
            <div className="">
              <h1 className="text-2xl m-4 text-gray font-bold">Last Name: <span className="text-white font-semibold text-xl">Aliu</span></h1>
              <h1 className="text-2xl m-4 text-gray font-bold">Nationality: <span className="text-white font-semibold text-xl">Nigerian</span></h1>
              <h1 className="text-2xl m-4 text-gray font-bold">Address: <span className="text-white font-semibold text-xl">Nigeria</span></h1>
              <h1 className="text-2xl m-4 text-gray font-bold">Email: <a href="mailto:aliuanas004@gmail.com" className="text-white font-semibold text-xl"></a></h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 col-span-1 gap-y-4 px-20">
          <div className="h-40 w-40 cols-span-1 border border-white rounded-sm"></div>
          <div className="h-40 w-40 cols-span-1 border border-white rounded-sm"></div>
          <div className="h-40 w-40 cols-span-1 border border-white rounded-sm"></div>
          <div className="h-40 w-40 cols-span-1 border border-white rounded-sm"></div>
        </div>
      </div>
    </div>
  )
}

export default About