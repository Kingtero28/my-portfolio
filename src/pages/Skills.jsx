import React from 'react'
import './styles/skills.css'

const Skills = ({ switchToggleButton }) => {
  return (
    <body className={switchToggleButton ? 'skillsLight' : 'skillsDark'}>
      <h2 className={switchToggleButton ? 'tittleLight' : 'tittleDark'} data-text="&nbsp;Mis Habilidades&nbsp;">&nbsp;Mis Habilidades&nbsp;</h2>
      <div className='container-skills'>
        <div className='scan'>
          <div className='html'></div>
          <h3 className={switchToggleButton ? 'skillsTxtLight' : 'skillsTxtDark'}>HTML</h3>
          <div className={switchToggleButton ? 'borderLight' : 'borderDark'}></div>
        </div>
        <div className='scan'>
          <div className='css'></div>
          <h3 className={switchToggleButton ? 'skillsTxtLight' : 'skillsTxtDark'}>CSS</h3>
          <div className={switchToggleButton ? 'borderLight' : 'borderDark'}></div>
        </div>
        <div className='scan'>
          <div className='react'></div>
          <h3 className={switchToggleButton ? 'skillsTxtLight' : 'skillsTxtDark'}>REACT</h3>
          <div className={switchToggleButton ? 'borderLight' : 'borderDark'}></div>
        </div>
        <div className='scan'>
          <div className='js'></div>
          <h3 className={switchToggleButton ? 'skillsTxtLight' : 'skillsTxtDark'}>JAVASCRIPT</h3>
          <div className={switchToggleButton ? 'borderLight' : 'borderDark'}></div>
        </div>
        <div className='scan'>
          <div className='cmas'></div>
          <h3 className={switchToggleButton ? 'skillsTxtLight' : 'skillsTxtDark'}>C++</h3>
          <div className={switchToggleButton ? 'borderLight' : 'borderDark'}></div>
        </div>
        <div className='scan'>
          <div className='c'></div>
          <h3 className={switchToggleButton ? 'skillsTxtLight' : 'skillsTxtDark'}>C#</h3>
          <div className={switchToggleButton ? 'borderLight' : 'borderDark'}></div>
        </div>
      </div>
    </body>
  )
}

export default Skills