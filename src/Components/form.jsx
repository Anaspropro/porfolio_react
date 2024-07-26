import message from '../assets/images/message.png'

const Form = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className="grid md:grid-cols-4 gap-y-5 gap-x-4 ">
        <input type="text" name="name" autoComplete="give-name" placeholder="YOUR NAME" className="bg-gray focus:border-yellow-500 focus:border-1  cursor-text  font-semibold h-9 border border-gray rounded-2xl outline-none md:col-span-2" />

        <input type="email" name="email" autoComplete="family-name" placeholder="YOUR EMAIL" className="bg-gray focus:border-yellow-500 focus:border-1  cursor-text  font-semibold h-9 border border-gray rounded-2xl outline-none md:col-span-2 " />

        <input type="text" name="subject" autoComplete="off" placeholder="YOUR SUBJECT" className="bg-gray focus:border-yellow-500 focus:border-1  cursor-text  font-semibold h-10 border border-gray rounded-2xl outline-none md:col-span-4" />

        <textarea name="message" autoComplete="off" placeholder="YOUR MESSAGE" className="bg-gray focus:border-yellow-500 focus:border-1  text-start cursor-text text-white font-semibold px-4 py-2 h-36 border border-gray rounded-2xl outline-none md:col-span-4 text-xs" />
      </div>

      <div className='flex border border-yellow-500 col-span-1 pl-5 text-white font-semibold  gap-3 w-fit rounded-3xl hover:bg-yellow-600'>
        <button className="text-xs">SEND MESSAGE</button>
        <img src={message} alt="" className='w-9 h-9 p-2 rounded-full bg-yellow-600' />
      </div>

    </div>
  )
}

export default Form