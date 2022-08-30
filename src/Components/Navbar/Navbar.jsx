import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/' className='navbar__logo navbar__link'>0xthree.</Link>

        <div className="navbar__links">
          <Link to='/' className='navbar__link'>Learn</Link>
          <Link to='/' className='navbar__link'>Build</Link>
          <Link to='/' className='navbar__link'>Explore</Link>
        </div>

        <div className="navbar__button">
          <Link to='/' className='navbar__link'>Subscribe</Link>
        </div>
    </div>
  )
}

export default Navbar