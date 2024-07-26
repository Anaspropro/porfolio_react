import Form from "../Components/form"
import mail from "../assets/images/email.png"
import address from "../assets/images/map.png"
import x from "../assets/images/twitter.png"
import github from "../assets/images/github.png"
import facebook from "../assets/images/facebook.png"
import telephone from "../assets/images/telephone.png"

const Contact = () => {
  return (
    <div>
      <section className="grid sm:grid-col-2 md:grid-cols-5 p-4">

        <div className="sm:grid-col-2 md:col-span-5 text-yellow-500 text-center font-extrabold text-3xl"><span className="text-white">
          GET IN</span> TOUCH
        </div>

        <div className="sm:grid-col-2 md:col-span-2 p-4 mx-2 text-white">
          <h1 className="font-bold text-xl mt-4 mb-3">
            DON&apos;T BE SHY !
          </h1>

          <p className="para">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="flex my-4 gap-3 items-start">
            <img src={address} alt="" className="w-4 h-4" />
            <div>
              <h1 className="contact-h">ADDRESS POINT</h1>
              <p className="contact-p">Plot 6, Medinah Community, Ilere, Akure, Ondo State.</p>
            </div>
          </div>

          <div className="flex my-4 gap-3 items-start">
            <img src={mail} alt="" className="w-4 h-4"/>
            <div>
              <h1 className="contact-h">MAIL ME</h1>
              <a href="mailto:aliuanas004@gmail.com" className="contact-p">aliuanas004@gmail.com</a>
              </div>
          </div>

          <div className="flex my-4 gap-3 items-start">
            <img src={telephone} alt="" className="w-4 h-4"/>
            <div>
              <h1 className="contact-h">CALL ME</h1>
              <a href="tel:+2349034272822" className="contact-p">+234 90 342 728 22</a>
            </div>
          </div>

          <div className="flex gap-3">
            <img src={x} alt="" className="w-8 h-8 bg-gray hover:bg-yellow-500 rounded-full p-2" />

            <img src={github} alt="" className="w-8 h-8 bg-gray hover:bg-yellow-500 rounded-full p-2" />

            <img src={facebook} alt="" className="w-8 h-8 bg-gray hover:bg-yellow-500 rounded-full p-2" />

          </div>
        </div>

        <div className="sm:grid-col-2 md:col-span-3 mx-2 pt-8 px-4">
          <Form />
        </div>
      </section>
    </div>
  )
}

export default Contact