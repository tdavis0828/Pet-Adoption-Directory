import { Link } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMoblieMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(()=> {
    showButton()
  },[])

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Little Misfits<i className='fa-solid fa-otter'></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className= 'nav-links' onClick={closeMoblieMenu}>Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/' className= 'nav-links' onClick={closeMoblieMenu}>About
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/' className= 'nav-links' onClick={closeMoblieMenu}>Contact
                    </Link>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'> Sign up</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar