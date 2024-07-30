import { Link } from 'react-router-dom'
import home from '../assets/images/home.png'
import about from '../assets/images/profile.png'
import portfolio from '../assets/images/portfolio.png'
import contact from '../assets/images/contact.png'



export const Navbar = () => {
  return (
    <div className=''>
      <nav className=''>
        <ul className='flex py-5 px-10 gap-10 align-middle justify-center'>
          <li className='w-10 h-10 bg-yellow-500 rounded-full p-2'>
          <Link to="/" className=''><img src={home} alt="" className='' /></Link>
          </li>
          <li className='w-10 h-10 bg-yellow-500 rounded-full p-2'>
          <Link to="/about" className=''><img src={about} alt="" className='' /></Link>
          </li>
          <li className='w-10 h-10 bg-yellow-500 rounded-full p-2'>
          <Link to="/portfolio" className=''><img src={portfolio} alt="" className='' /></Link>
          </li>
          <li className='w-10 h-10 bg-yellow-500 rounded-full p-2'>
          <Link to="/contact" className=''><img src={contact} alt="" className='' /></Link>
          </li>
        </ul>
    </nav>
    </div>
  )
}
