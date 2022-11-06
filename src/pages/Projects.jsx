import React from 'react'
import './styles/projects.css'

const Projects = () => {
  return (
    <body className='projects'>
      <div className='container'>
        <div className='serviceBox'>
          <div className='icon'><video src="/public/videos/WeatherApp.mp4" autoPlay muted loop></video></div>
          <div className='content'>
            <h2>Weather</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Look at me</button>
          </div>
        </div>
        <div className='serviceBox'>
          <div className='icon'><video src="/public/videos/CrudsApp.mp4" autoPlay muted loop></video></div>
          <div className='content'>
            <h2>CRUD's</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Look at me</button>
          </div>
        </div>
        <div className='serviceBox'>
          <div className='icon'><video src="/public/videos/QuoteBoxApp.mp4" autoPlay muted loop></video></div>
          <div className='content'>
            <h2>QuoteBox</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Look at me</button>
          </div>
        </div>
        <div className='serviceBox'>
          <div className='icon'><video src="/public/videos/RickAndMortyApp.mp4" autoPlay muted loop></video></div>
          <div className='content'>
            <h2>Rick And Morty</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Look at me</button>
          </div>
        </div>
        <div className='serviceBox'>
          <div className='icon'></div>
          <div className='content'></div>
        </div>
        <div className='serviceBox'>
          <div className='icon'></div>
          <div className='content'></div>
        </div>
      </div>
    </body>
  )
}

export default Projects