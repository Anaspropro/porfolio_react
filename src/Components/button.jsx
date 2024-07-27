/* eslint-disable react/prop-types */

const Button = ({text, image}) => {
  return (
    <div className='flex border border-yellow-500 col-span-1 pl-5 text-white font-semibold my-3 gap-3 w-fit rounded-3xl hover:bg-yellow-600'>
      <button className="text-xs font-bold">{text}</button>
      <img src={image} alt="" className='w-9 h-9 p-2 rounded-full bg-yellow-600' />
    </div>
  )
}

export default Button