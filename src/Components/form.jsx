import Button from './button'
import message from '../assets/images/message.png'

const Form = () => {
  return (
    <div className='flex flex-col gap-4 py-1'>
      <div className="grid md:grid-cols-4 gap-y-6 gap-x-4 ">
        <input type="text" name="name" autoComplete="give-name" placeholder="YOUR NAME" className="bg-gray text-yellow-300 focus:border-yellow-600 focus:border-1 text-lg cursor-text font-medium h-12 border border-gray rounded-2xl outline-none md:col-span-2" />

        <input type="email" name="email" autoComplete="family-name" placeholder="YOUR EMAIL" className="bg-gray text-yellow-300 focus:border-yellow-600 focus:border-1 text-lg cursor-text font-medium h-12 border border-gray rounded-2xl outline-none md:col-span-2" />

        <input type="text" name="subject" autoComplete="off" placeholder="YOUR SUBJECT" className="bg-gray text-yellow-300 focus:border-yellow-600 focus:border-1 text-lg cursor-text font-medium h-12 border border-gray rounded-2xl outline-none md:col-span-4" />

        <textarea name="message" autoComplete="off" placeholder="YOUR MESSAGE" className="bg-gray text-yellow-300 focus:border-yellow-600 focus:border-1 text-start cursor-text px-4 py-2 h-44 border border-gray rounded-2xl outline-none md:col-span-4" />
      </div>
      <Button text={"Send message"} image={message} />
    </div>
  )
}

export default Form