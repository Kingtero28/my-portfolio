import React from 'react'
import './styles/contactMe.css'

const ContactMe = ({ switchToggleButton }) => {
  return (
    <body className='contactMe'>
      <section className={switchToggleButton ? 'contactLight' : 'contactDark'}>
        <div className={switchToggleButton ? 'contentLight' : 'contentDark'}>
          <h2>Contact Me!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia illo impedit ullam voluptates sunt eum quis a accusamus?</p>
        </div>
        <div className={switchToggleButton ? 'containerLight' : 'containerDark'}>
          <div className={switchToggleButton ? 'contactInfoLight' : 'contactInfoDark'}>
            <div className={switchToggleButton ? 'boxLight' : 'boxDark'}>
              <div className={switchToggleButton ? 'iconLight' : 'iconDark'}><ion-icon name="location-outline"></ion-icon></div>
              <div className={switchToggleButton ? 'textLight' : 'textDark'}>
                <h3>Address</h3>
                <p>Calle 55 #99-250,<br />Brisas Del Limonar,<br />Cali, Valle del Cauca</p>
              </div>
            </div>
            <div className={switchToggleButton ? 'boxLight' : 'boxDark'}>
              <div className={switchToggleButton ? 'iconLight' : 'iconDark'}><ion-icon name="call-outline"></ion-icon></div>
              <div className={switchToggleButton ? 'textLight' : 'textDark'}>
                <h3>Phone</h3>
                <p>+57 3193158597</p>
              </div>
            </div>
            <div className={switchToggleButton ? 'boxLight' : 'boxDark'}>
              <div className={switchToggleButton ? 'iconLight' : 'iconDark'}><ion-icon name="mail-outline"></ion-icon></div>
              <div className={switchToggleButton ? 'textLight' : 'textDark'}>
                <h3>Email</h3>
                <p>danielkq8@gmail.com</p>
              </div>
            </div>
            <h2 className={switchToggleButton ? 'txtLight' : 'txtDark'}>Connect with me</h2>
            <ul className={switchToggleButton ? 'sciLight' : 'sciDark'}>
              <li><a href=""><ion-icon name="logo-facebook"></ion-icon></a></li>
              <li><a href=""><ion-icon name="logo-slack"></ion-icon></a></li>
              <li><a href=""><ion-icon name="logo-linkedin"></ion-icon></a></li>
              <li><a href=""><ion-icon name="logo-instagram"></ion-icon></a></li>
            </ul>
          </div>

          <div className={switchToggleButton ? 'contactFormLight' : 'contactFormDark'}>
            <form>
              <h2>Send Message</h2>
              <div className={switchToggleButton ? 'inputBoxLight' : 'inputBoxDark'}>
                <input type="text" name='' required='required' />
                <span>Full Name</span>
              </div>
              <div className={switchToggleButton ? 'inputBoxLight' : 'inputBoxDark'}>
                <input type="text" name='' required='required' />
                <span>Email</span>
              </div>
              <div className={switchToggleButton ? 'inputBoxLight' : 'inputBoxDark'}>
                <input type="text" required='required' />
                <span>Type your Message...</span>
              </div>
              <div className={switchToggleButton ? 'inputBoxLight' : 'inputBoxDark'}>
                <input type="submit" value='Send' />
              </div>
            </form>
          </div>
        </div>
      </section>
    </body>
  )
}

export default ContactMe