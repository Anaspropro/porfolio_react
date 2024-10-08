import Form from "../Components/form"
import mail from "../assets/images/email.png"
import address from "../assets/images/map.png"
import x from "../assets/images/twitter.png"
import github from "../assets/images/github.png"
import facebook from "../assets/images/facebook.png"
import telephone from "../assets/images/telephone.png"

const Contact = () => {
  return (
    <div className="bg-black">
      <section className="grid grid-col-2 lg:grid-cols-5 md:p-6">

        <div className="sm:grid-col-2 lg:col-span-5 py-3 text-yellow-600 text-center font-extrabold text-3xl md:text-6xl"><span className="text-white">
          GET IN</span> TOUCH
        </div>

        <div className="sm:grid-col-2 lg:col-span-2 px-5 md:mt-10 mx-2 text-white">
          <h1 className="font-bold text-xl md:text-3xl my-4">
            DON&apos;T BE SHY !
          </h1>

          <p className="text-lg font-normal text-white">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="info flex my-4 gap-3 items-start align-top justify-start">
            <img src={address} alt="" className="w-6 h-6" />
            <div>
              <h1 className="contact-h">ADDRESS POINT</h1>
              <p className="contact-p">Plot 6, Medinah Community, Ilere, Akure, Ondo State.</p>
            </div>
          </div>

          <div className="info flex my-4 gap-3 items-start">
            <img src={mail} alt="" className="w-5 h-5"/>
            <div>
              <h1 className="contact-h">MAIL ME</h1>
              <a href="mailto:aliuanas004@gmail.com" className="contact-p">aliuanas004@gmail.com</a>
              </div>
          </div>

          <div className="info flex my-4 gap-3 items-start">
            <img src={telephone} alt="" className="w-6 h-6"/>
            <div>
              <h1 className="contact-h">CALL ME</h1>
              <a href="tel:+2349034272822" className="contact-p">+234 90 342 728 22</a>
            </div>
          </div>

          <div className="flex gap-3">
            <img src={x} alt="" className="w-8 h-8 bg-gray hover:bg-yellow-600 rounded-full p-2 mb-2 hover:transition-all hover:duration-1000" />

            <img src={github} alt="" className="w-8 h-8 bg-gray hover:bg-yellow-600 rounded-full p-2 mb-2 hover:transition-all hover:duration-1000" />

            <img src={facebook} alt="" className="w-8 h-8 bg-gray hover:bg-yellow-600 rounded-full p-2 mb-2 hover:transition-all hover:duration-1000" />

          </div>
        </div>

        <div className="sm:grid-col-2 lg:col-span-3 mx-2 mt-11 p-4">
          <Form />
        </div>
      </section>
    </div>
  )
}

export default Contact