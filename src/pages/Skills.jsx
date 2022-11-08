import React from 'react'
import './styles/skills.css'

const Skills = ({ switchToggleButton }) => {
  return (
    <body className='skills'>
      <h2 className={switchToggleButton ? 'tittleLight' : 'tittleDark'} data-text="&nbsp;Mis Habilidades&nbsp;">&nbsp;Mis Habilidades&nbsp;</h2>
      <div className='container-skills'>
        <div className='scan'>
          <div className='html'></div>
          <h3>HTML</h3>
          <div className='border'></div>
        </div>
        <div className='scan'>
          <div className='css'></div>
          <h3>CSS</h3>
          <div className='border'></div>
        </div>
        <div className='scan'>
          <div className='react'></div>
          <h3>REACT</h3>
          <div className='border'></div>
        </div>
        <div className='scan'>
          <div className='js'></div>
          <h3>JAVASCRIPT</h3>
          <div className='border'></div>
        </div>
        <div className='scan'>
          <div className='cmas'></div>
          <h3>C++</h3>
          <div className='border'></div>
        </div>
        <div className='scan'>
          <div className='c'></div>
          <h3>C#</h3>
          <div className='border'></div>
        </div>
      </div>
    </body>
  )
}

export default Skills