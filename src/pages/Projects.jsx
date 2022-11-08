import React from 'react'
import './styles/projects.css'

const Projects = ({ switchToggleButton }) => {
  return (
    <body className={switchToggleButton ? 'projectsLight' : 'projectsDark'}>
      <h2 className={switchToggleButton ? 'tittleLight' : 'tittleDark'} data-text="&nbsp;Mis Proyectos&nbsp;">&nbsp;Mis Proyectos&nbsp;</h2>
      <div className={switchToggleButton ? 'containerProjectsLight' : 'containerProjectsDark'}>
        <div className={switchToggleButton ? 'serviceBoxLight' : 'serviceBoxDark'}>
          <div className='icon'><video src="/videos/WeatherApp.mp4" autoPlay muted loop playsInline></video></div>
          <div className={switchToggleButton ? 'contentProjectsLight' : 'contentProjectsDark'}>
            <h2>Weather</h2>
            <p>App que muestra datos del clima en °C o en °F</p>
            <a href="https://weatherapp-danielquintero.netlify.app/" target="_blank"><button className='contentBtn'>Mirame</button></a>
          </div>
        </div>
        <div className={switchToggleButton ? 'serviceBoxLight' : 'serviceBoxDark'}>
          <div className='icon'><video src="/videos/CrudsApp.mp4" autoPlay muted loop playsInline></video></div>
          <div className={switchToggleButton ? 'contentProjectsLight' : 'contentProjectsDark'}>
            <h2>CRUD's</h2>
            <p>App donde se pueden crear, eliminar y actualizar usuarios</p>
            <button className='contentBtn'>Mirame</button>
          </div>
        </div>
        <div className={switchToggleButton ? 'serviceBoxLight' : 'serviceBoxDark'}>
          <div className='icon'><video src="/videos/QuoteBoxApp.mp4" autoPlay muted loop playsInline></video></div>
          <div className={switchToggleButton ? 'contentProjectsLight' : 'contentProjectsDark'}>
            <h2>QuoteBox</h2>
            <p>App que muestra citas al azar en diferentes colores</p>
            <button className='contentBtn'>Mirame</button>
          </div>
        </div>
        <div className={switchToggleButton ? 'serviceBoxLight' : 'serviceBoxDark'}>
          <div className='icon'><video src="/videos/RickAndMortyApp.mp4" autoPlay muted loop playsInline></video></div>
          <div className={switchToggleButton ? 'contentProjectsLight' : 'contentProjectsDark'}>
            <h2>Rick And Morty</h2>
            <p>App con información de las dimensiones y sus residentes</p>
            <button className='contentBtn'>Mirame</button>
          </div>
        </div>
        <div className={switchToggleButton ? 'serviceBoxLight' : 'serviceBoxDark'}>
          <div className='icon'></div>
          <div className={switchToggleButton ? 'contentProjectsLight' : 'contentProjectsDark'}></div>
        </div>
        <div className={switchToggleButton ? 'serviceBoxLight' : 'serviceBoxDark'}>
          <div className='icon'></div>
          <div className={switchToggleButton ? 'contentProjectsLight' : 'contentProjectsDark'}></div>
        </div>
      </div>
    </body>
  )
}

export default Projects