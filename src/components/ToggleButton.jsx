import React from 'react'
import './styles/toggleButton.css'

const ToggleButton = ({ switchToggleButton, handleToggleButton }) => {
  return (
    <body className='toggle-button'>
      <div onClick={handleToggleButton} id={switchToggleButton ? 'lightMode' : 'darkMode'}>
        <i className='indicator'></i>
      </div>
    </body>
  )
}

export default ToggleButton