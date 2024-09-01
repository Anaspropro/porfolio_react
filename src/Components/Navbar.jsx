import { Link } from 'react-router-dom'
import home from '../assets/images/home.png'
import about from '../assets/images/profile.png'
import portfolio from '../assets/images/portfolio.png'
import contact from '../assets/images/contact.png'



export const Navbar = () => {
  return (
    <div className='border-b-2 border-yellow-600'>
      <nav className=''>
        <ul className='flex flex-1 px-8 py-4 md:px-10 justify-between md:gap-14 align-middle md:justify-center'>
          <li className='w-fit h-fit hover:bg-yellow-600 md:p-2 rounded-full border border-yellow-600'>
          <Link to="/" className='flex items-center justify-center md:gap-4 p-4 md:p-0 md:mx-3'>
            <h1 className='text-white text-lg font-medium hidden md:flex'>HOME</h1>
            <img src={home} alt="" className='w-5 h-5' />
          </Link>
          </li>
          <li className='w-fit h-fit hover:bg-yellow-600 md:p-2 rounded-full border border-yellow-600'>
          <Link to="/about" className='flex items-center justify-center gap-4 p-4 md:p-0 md:mx-3'>
            <h1 className='text-white text-lg font-medium hidden md:flex'>ABOUT</h1>
            <img src={about} alt="" className='w-5 h-5' />
          </Link>
          </li>
          <li className='w-fit h-fit hover:bg-yellow-600 md:p-2 rounded-full border border-yellow-600'>
          <Link to="/portfolio" className='flex items-center justify-center gap-4 p-4 md:p-0 md:mx-3'>
            <h1 className='text-white text-lg font-medium hidden md:flex'>PORTFOLIO</h1>
            <img src={portfolio} alt="" className='w-5 h-5' />
          </Link>
          </li>
          <li className='w-fit h-fit hover:bg-yellow-600 md:p-2 rounded-full border border-yellow-600'>
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
