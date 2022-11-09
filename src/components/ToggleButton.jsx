import React from 'react'
import './styles/toggleButton.css'

const ToggleButton = ({ switchToggleButton, handleToggleButton }) => {
  return (
    <body className='toggle-button'>
      <div onClick={handleToggleButton} className={switchToggleButton ? 'lightMode' : 'darkMode'}>
      </div>
    </body>
  )
}

export default ToggleButton