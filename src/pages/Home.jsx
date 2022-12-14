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
              <a href="https://www.linkedin.com/in/daniel-quintero-kingtero28/" target="_blank">
                <button className={switchToggleButton ? 'btnHomeLight' : 'btnHomeDark'}>LinkedIn</button>
              </a>
              <a href="https://drive.google.com/file/d/1GICejhTLs5KiAnQd_ZaVyfKmyapBqf9P/view?usp=sharing" target="_blank">
                <button className={switchToggleButton ? 'btn2HomeLight' : 'btn2HomeDark'}>Mi CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Home