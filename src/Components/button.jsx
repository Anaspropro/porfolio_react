/* eslint-disable react/prop-types */

const Button = ({text, image}) => {
  return (
    <div className='flex border border-blue-700 col-span-1 pl-5 text-white my-3 gap-3 w-fit rounded-3xl hover:bg-blue-700 hover:transition-all hover:duration-[900ms] hover:ease-linear'>
      <button className="text-xl font-bold">{text}</button>
      <img src={image} alt="" className='w-12 h-12 p-2 rounded-3xl bg-blue-700' />
    </div>
  )
}

export default Button