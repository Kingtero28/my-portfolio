import React from 'react'
import './styles/toggleLanguage.css'

const ToggleLanguage = ({ switchBtnLan, handleBtnLan }) => {
  return (
    <body className='toggleLanguage'>
      <div onClick={handleBtnLan} className={switchBtnLan ? 'lanEng' : 'lanEsp'}></div>
    </body>
  )
}

export default ToggleLanguage