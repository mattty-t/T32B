import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown} from 'react-icons/fa'
import {useAppContext} from '../context/appContext'
import Logo from './Logo'
import {useState} from 'react'
const Navbar = () => {
  const [showLogout,setShowLogout] = useState(false)
  const {toggleSidebar} = useAppContext()
  return (
    <Wrapper>
      <div className="nav-center">
        <button type='button' className="toggle-btn" onClick={(toggleSidebar) }>
          <FaAlignLeft/>
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>Dashboard</h3>
        </div>
        </div>
        <div className="btn-container">
          <button type='button' className="btn" onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle /> 
            Job 
            <FaCaretDown />
          </button>
          <div className={showLogout? "dropdown show-dropdown" : "dropdown"}>
            <button type="buttom" className="dropdown-btn" onClick={() => console.log('logout user')}>

            </button>
          </div>
        </div>


    </Wrapper>
  )
}

export default Navbar
