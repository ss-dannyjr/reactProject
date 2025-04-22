 import './Navbar.css'

import logo from '../Assets/logo.png'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} className='nav-logo' alt="" />
      <p>KYATO SHOP-Admin Pannel</p>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
