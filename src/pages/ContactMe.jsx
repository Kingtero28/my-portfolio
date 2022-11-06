import React from 'react'
import './styles/contactMe.css'

const ContactMe = () => {
  return (
    <body className='contactMe'>
      <section className='contact'>
        <div className='content'>
          <h2>Contact Me!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia illo impedit ullam voluptates sunt eum quis a accusamus?</p>
        </div>
        <div className='container'>
          <div className='contactInfo'>
            <div className='box'>
              <div className='icon'><ion-icon name="location-outline"></ion-icon></div>
              <div className='text'>
                <h3>Address</h3>
                <p>Calle 55 #99-250,<br />Brisas Del Limonar,<br />Cali, Valle del Cauca</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'><ion-icon name="call-outline"></ion-icon></div>
              <div className='text'>
                <h3>Phone</h3>
                <p>+57 3193158597</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'><ion-icon name="mail-outline"></ion-icon></div>
              <div className='text'>
                <h3>Email</h3>
                <p>danielkq8@gmail.com</p>
              </div>
            </div>
            <h2 className='txt'>Connect with me</h2>
            <ul className='sci'>
              <li><a href=""><ion-icon name="logo-facebook"></ion-icon></a></li>
              <li><a href=""><ion-icon name="logo-slack"></ion-icon></a></li>
              <li><a href=""><ion-icon name="logo-linkedin"></ion-icon></a></li>
              <li><a href=""><ion-icon name="logo-instagram"></ion-icon></a></li>
            </ul>
          </div>

          <div className='contactForm'>
            <form>
              <h2>Send Message</h2>
              <div className='inputBox'>
                <input type="text" name='' required='required' />
                <span>Full Name</span>
              </div>
              <div className='inputBox'>
                <input type="text" name='' required='required' />
                <span>Email</span>
              </div>
              <div className='inputBox'>
                <input type="text" required='required' />
                <span>Type your Message...</span>
              </div>
              <div className='inputBox'>
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