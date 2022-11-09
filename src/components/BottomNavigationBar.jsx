import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/bottomNavigationBar.css'

const BottomNavigationBar = ({ switchToggleButton }) => {

  const [switchMenuToggle, setSwitchMenuToggle] = useState(false)

  const handleToggleSwitch = () => {
    switchMenuToggle ? setSwitchMenuToggle(false) : setSwitchMenuToggle(true)
  }

  return (
    <body className='bottomNavigationBar'>
      <div className='navigation'>
        <div onClick={handleToggleSwitch} className={switchMenuToggle ? 
                                                      switchToggleButton ? 'menuToggleClosedLight' : 'menuToggleClosedDark' 
                                                    : 
                                                      switchToggleButton ? 'menuToggleOpenLight' : 'menuToggleOpenDark' 
                                                    }
        ><i></i>
        </div>
        <div className={switchToggleButton ? 'menuLight' : 'menuDark'}>
          <ul>
            <li><Link to='/'><ion-icon name="home-outline"></ion-icon></Link></li>
            <li><Link to='/skills'><ion-icon name="person-outline"></ion-icon></Link></li>
            <li></li>
            <li><Link to='/projects'><ion-icon name="folder-outline"></ion-icon></Link></li>
            <li><Link to='/contactMe'><ion-icon name="mail-outline"></ion-icon></Link></li>
          </ul>
        </div>
      </div>
    </body>
  )
}

export default BottomNavigationBar