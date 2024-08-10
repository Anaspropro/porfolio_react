import { Link } from 'react-router-dom'
import home from '../assets/images/home.png'
import about from '../assets/images/profile.png'
import portfolio from '../assets/images/portfolio.png'
import contact from '../assets/images/contact.png'



export const Navbar = () => {
  return (
    <div className='border-b-2 border-red-700'>
      <nav className=''>
        <ul className='flex flex-1 py-6 px-10 gap-14 align-middle justify-center'>
          <li className='w-fit h-fit hover:bg-red-700 md:p-2 rounded-full border border-red-700'>
          <Link to="/" className='flex items-center justify-center gap-4 p-4 md:p-0 md:mx-3'>
            <h1 className='text-white text-lg font-medium hidden md:flex'>HOME</h1>
            <img src={home} alt="" className='w-5 h-5' />
          </Link>
          </li>
          <li className='w-fit h-fit hover:bg-red-700 md:p-2 rounded-full border border-red-700'>
          <Link to="/about" className='flex items-center justify-center gap-4 p-4 md:p-0 md:mx-3'>
            <h1 className='text-white text-lg font-medium hidden md:flex'>ABOUT</h1>
            <img src={about} alt="" className='w-5 h-5' />
          </Link>
          </li>
          <li className='w-fit h-fit hover:bg-red-700 md:p-2 rounded-full border border-red-700'>
          <Link to="/portfolio" className='flex items-center justify-center gap-4 p-4 md:p-0 md:mx-3'>
            <h1 className='text-white text-lg font-medium hidden md:flex'>PORTFOLIO</h1>
            <img src={portfolio} alt="" className='w-5 h-5' />
          </Link>
          </li>
          <li className='w-fit h-fit hover:bg-red-700 md:p-2 rounded-full border border-red-700'>
          <Link to="/contact" className='flex items-center justify-center gap-4 p-4 md:p-0 md:mx-3'>
            <h1 className='text-white text-lg font-medium hidden md:flex'>CONTACT</h1>
            <img src={contact} alt="" className='w-5 h-5' />
          </Link>
          </li>
        </ul>
    </nav>
    </div>
  )
}
