import React from 'react'
import './styles/home.css'

const Home = () => {
  return (
    <body className='home'>
      <div className='home-card'>
        <div className='home-card__lines'></div>
        <div className='home-card__imgBx'>
          <img src="/images/photo__home.jpg" alt="" />
        </div>
        <div className='home-card-content'>
          <div className='home-card-content__details'>
            <h2>Daniel Quintero<br /><span>Frontend Developer</span></h2>
            <div className='home-card-content__data'>
              <h3>342<br /><span>Posts</span></h3>
              <h3>120k<br /><span>Followers</span></h3>
              <h3>285<br /><span>Following</span></h3>
            </div>
            <div className='home-card-content__actionBtn'>
              <button>LinkedIn</button>
              <button>Mi CV</button>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Home