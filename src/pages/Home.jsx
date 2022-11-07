import React from 'react'
import './styles/home.css'

const Home = ({ switchToggleButton }) => {
  return (
    <body className={switchToggleButton ? 'homeLight' : 'homeDark'}>
      <div className={switchToggleButton ? 'cardLight' : 'cardDark'}>
        <div className={switchToggleButton ? 'cardLight__lines' : 'cardDark__lines'}></div>
        <div className={switchToggleButton ? 'cardLight__imgBx' : 'cardDark__imgBx'}>
          <img src="/images/photo__home.jpg" alt="" />
        </div>
        <div className={switchToggleButton ? 'cardLight__content' : 'cardDark__content'}>
          <div className={switchToggleButton ? 'cardLight__content__details' : 'cardDark__content__details'}>
            <h2>Daniel Quintero<br /><span>Frontend Developer</span></h2>
            <div className={switchToggleButton ? 'cardLight__content__data' : 'cardDark__content__data'}>
              <h3>342<br /><span>Posts</span></h3>
              <h3>120k<br /><span>Followers</span></h3>
              <h3>285<br /><span>Following</span></h3>
            </div>
            <div className={switchToggleButton ? 'cardLight__content__actionBtn' : 'cardDark__content__actionBtn'}>
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