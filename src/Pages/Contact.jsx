import Form from "../Components/form"


const Contact = () => {
  return (
    <section className="grid grid-cols-5 p-4">

      <div className="col-span-5 text-yellow-500 text-center font-extrabold text-3xl"><span className="text-white">
        GET IN</span> TOUCH
      </div>

      <div className="col-span-2 p-4 mx-2 text-white">
        <h1 className="font-bold text-xl mt-4 mb-3">
          DON&apos;T BE SHY !
        </h1>

        <p className="text-xs mb-1">
          Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <div className="flex my-4">
          <img src="" alt="" />
          <div>
            <h1 className="text-gray-300 text-sm font-normal">ADDRESS POINT</h1>
            <p className="text-xs my-1 font-medium">Plot 6, Medinah Community, Ilere, Akure, Ondo State.</p>
          </div>
        </div>

        <div className="flex my-4">
          <img src="" alt="" />
          <div>
            <h1 className="text-gray-300 text-sm font-normal">MAIL ME</h1>
            <a href="mailto:aliuanas004@gmail.com" className="text-xs my-1 font-medium">aliuanas004@gmail.com</a>
            </div>
        </div>

        <div className="flex my-4">
          <img src="" alt="" />
          <div>
            <h1 className="text-gray-300 text-sm font-normal">CALL ME</h1>
            <a href="tel:+2349034272822" className="text-xs my-1 font-medium">+2349034272822</a>
          </div>
        </div>
        <div>
          <a href="http://"></a>
          <a href="http://"></a>
          <a href="http://"></a>
        </div>
      </div>

      <div className="col-span-3 mx-2 pt-8 px-4">
        <Form />
      </div>
    </section>
  )
}

export default Contact