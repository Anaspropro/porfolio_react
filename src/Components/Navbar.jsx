import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className='px-4 flex flex-1 justify-center border-b-2 border-yellow-500 text-yellow-500'>
        <ul className="flex flex-1 p-4 justify-center align-middle gap-20">
          <li className='text-sm font-mono font-semibold p-1 '>
            <img src="" alt="" />
            <Link to="/" className='hover:bg-yellow-400 hover:rounded-3xl hover:text-black p-3'>Home</Link>
          </li>
          <li className='text-sm font-mono font-semibold p-1 '>
            <img src="" alt="" />
            <Link to="/about" className='hover:bg-yellow-400 hover:rounded-3xl hover:text-black p-3'>About</Link>
          </li>
          <li className='text-sm font-mono font-semibold p-1 '>
            <img src="" alt="" />
            <Link to="/portfolio" className='hover:bg-yellow-400 hover:rounded-3xl hover:text-black p-3'>Project</Link>
          </li>
          <li className='text-sm font-mono font-semibold p-1 '>
            <img src="" alt="" />
            <Link to="/contact" className='hover:bg-yellow-400 hover:rounded-3xl hover:text-black p-3'>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
