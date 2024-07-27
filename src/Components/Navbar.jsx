import { Link } from 'react-router-dom'
import home from '../assets/images/home.png'
import about from '../assets/images/profile.png'
import portfolio from '../assets/images/portfolio.png'
import contact from '../assets/images/contact.png'

export const Navbar = () => {
  return (
    <>
      <nav className='flex md:justify-center border-r-2 border-yellow-500 text-yellow-500'>
        <ul className="flex flex-col p-1 gap-3 align-middle justify-between md:justify-center md:gap-20">
          <li className='flex gap-1 md:gap-2 justify-center items-center text-sm font-mono font-semibold hover:bg-yellow-400 hover:rounded-3xl hover:text-black p-2 '>
            <img src={home} alt="" className='w-3 h-3 fill-yellow-500' />
            <Link to="/" className=''>Home</Link>
          </li>
          <li className='flex gap-1 md:gap-2 justify-center items-center text-sm font-mono font-semibold hover:bg-yellow-400 hover:rounded-3xl hover:text-black p-2 '>
            <img src={about} alt="" className='w-3 h-3 fill-yellow-500' />
            <Link to="/about" className=''>About</Link>
          </li>
          <li className='flex gap-1 md:gap-2 justify-center items-center text-sm font-mono font-semibold hover:bg-yellow-400 hover:rounded-3xl hover:text-black p-2 '>
            <img src={portfolio} alt="" className='w-3 h-3 fill-yellow-500' />
            <Link to="/portfolio" className=''>Project</Link>
          </li>
          <li className='flex gap-1 md:gap-2 justify-center items-center text-sm font-mono font-semibold hover:bg-yellow-400 hover:rounded-3xl hover:text-black p-2 '>
            <img src={contact} alt="" className='w-3 h-3 fill-yellow-500' />
            <Link to="/contact" className=''>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
