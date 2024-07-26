import message from '../assets/images/message.png'

const Button = () => {
  return (
    <div className='flex border border-yellow-500 col-span-1 pl-5 text-white font-semibold  gap-3 w-fit rounded-3xl hover:bg-yellow-600'>
      <button className="text-xs">SEND MESSAGE</button>
      <img src={message} alt="" className='w-9 h-9 p-2 rounded-full bg-yellow-600' />
    </div>
  )
}

export default Button