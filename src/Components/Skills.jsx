
const Skills = () => {
  return (
    <section className="my-10 px-3 md:px-5 lg:px-12 py-4">
      <h1 className="text-3xl font-bold text-white text-center p-10">MY SKILLS</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:py-8">
        <div className="flex gap-2 items-center">
          <h1 className="text-white text-base md:text-xl font-semibold py-2">HTML</h1>
          <div className="w-52 h-2 border border-yellow-500 items-center flex">
            <div className="w-48 h-2 bg-yellow-500"></div>  
          </div>
        </div>

        <div className="flex gap-1 md:gap-4 items-center">
          <h1 className="text-white text-base md:text-xl font-semibold py-2">CSS</h1>
          <div className="w-52 h-2 border border-yellow-500 items-center flex">
            <div className="w-48 h-2 bg-yellow-500"></div>  
          </div>
        </div>
        <div className="flex gap-1 md:gap-4 items-center">
          <h1 className="text-white text-base md:text-xl font-semibold py-2">TailwindCSS</h1>
          <div className="w-52 h-2 border border-yellow-500 items-center flex">
            <div className="w-44 h-2 bg-yellow-500"></div>  
          </div>
        </div>
        <div className="flex gap-1 md:gap-4 items-center">
          <h1 className="text-white text-base md:text-xl font-semibold py-2">Sass</h1>
          <div className="w-52 h-2 border border-yellow-500 items-center flex">
            <div className="w-32 h-2 bg-yellow-500"></div>  
          </div>
        </div>
        <div className="flex gap-1 md:gap-4 items-center">
          <h1 className="text-white text-base md:text-xl font-semibold py-2">SQL</h1>
          <div className="w-52 h-2 border border-yellow-500 items-center flex">
            <div className="w-16 h-2 bg-yellow-500"></div>  
          </div>
        </div>
        <div className="flex gap-1 md:gap-4 items-center">
          <h1 className="text-white text-xl font-semibold py-2">JavaScript</h1>
          <div className="w-52 h-2 border border-yellow-500 items-center flex">
            <div className="w-40 h-2 bg-yellow-500"></div>  
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <h1 className="text-white text-xl font-semibold py-2">React JS</h1>
          <div className="w-52 h-2 border border-yellow-500 items-center flex">
            <div className="w-40 h-2 bg-yellow-500"></div>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills