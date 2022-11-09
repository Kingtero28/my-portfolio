import React from 'react'
import './styles/contactMe.css'

const ContactMe = ({ switchToggleButton, switchBtnLan }) => {
  return (
    <body className='contactMe'>
      <section className={switchToggleButton ? 'contactLight' : 'contactDark'}>
        <div className={switchToggleButton ? 'contentLight' : 'contentDark'}>
          {
            switchBtnLan ? <h2>Contact Me!</h2> : <h2>Contáctame!</h2>
          }
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia illo impedit ullam voluptates sunt eum quis a accusamus?</p>
        </div>
        <div className={switchToggleButton ? 'containerLight' : 'containerDark'}>
          <div className={switchToggleButton ? 'contactInfoLight' : 'contactInfoDark'}>
            <div className={switchToggleButton ? 'boxLight' : 'boxDark'}>
              <div className={switchToggleButton ? 'iconLight' : 'iconDark'}><ion-icon name="location-outline"></ion-icon></div>
              <div className={switchToggleButton ? 'textLight' : 'textDark'}>
                {
                  switchBtnLan ? <h3>Address</h3> : <h3>Dirección</h3>
                }
                <p>Calle 55 #99-250,<br />Brisas Del Limonar,<br />Cali, Valle del Cauca</p>
              </div>
            </div>
            <div className={switchToggleButton ? 'boxLight' : 'boxDark'}>
              <div className={switchToggleButton ? 'iconLight' : 'iconDark'}><ion-icon name="call-outline"></ion-icon></div>
              <div className={switchToggleButton ? 'textLight' : 'textDark'}>
                {
                  switchBtnLan ? <h3>Phone</h3> : <h3>Teléfono</h3>
                }
                <p>+57 3193158597</p>
              </div>
            </div>
            <div className={switchToggleButton ? 'boxLight' : 'boxDark'}>
              <div className={switchToggleButton ? 'iconLight' : 'iconDark'}><ion-icon name="mail-outline"></ion-icon></div>
              <div className={switchToggleButton ? 'textLight' : 'textDark'}>
                {
                  switchBtnLan ? <h3>Email</h3> : <h3>Correo</h3>
                }
                <p>danielkq8@gmail.com</p>
              </div>
            </div>
            {
              switchBtnLan ? 
                <h2 className={switchToggleButton ? 'txtLight' : 'txtDark'}>Connect with me</h2> 
              : 
                <h2 className={switchToggleButton ? 'txtLight' : 'txtDark'}>Conéctate conmigo</h2>
            }
            <ul className={switchToggleButton ? 'sciLight' : 'sciDark'}>
              <li><a href=""><ion-icon name="logo-facebook"></ion-icon></a></li>
              <li><a href=""><ion-icon name="logo-slack"></ion-icon></a></li>
              <li><a href=""><ion-icon name="logo-linkedin"></ion-icon></a></li>
              <li><a href=""><ion-icon name="logo-instagram"></ion-icon></a></li>
            </ul>
          </div>

          <div className={switchToggleButton ? 'contactFormLight' : 'contactFormDark'}>
            <form>
              {
                switchBtnLan ? <h2>Send Message</h2> : <h2>Enviar Mensaje</h2>
              }
              <div className={switchToggleButton ? 'inputBoxLight' : 'inputBoxDark'}>
                <input type="text" name='' required='required' />
                {
                  switchBtnLan ? <span>Full Name</span> : <span>Nombre Completo</span>
                }
              </div>
              <div className={switchToggleButton ? 'inputBoxLight' : 'inputBoxDark'}>
                <input type="text" name='' required='required' />
                {
                  switchBtnLan ? <span>Email</span> : <span>Correo</span>
                }
              </div>
              <div className={switchToggleButton ? 'inputBoxLight' : 'inputBoxDark'}>
                <input type="text" required='required' />
                {
                  switchBtnLan ? <span>Type your Message...</span> : <span>Escribe tu mensaje...</span>
                }
              </div>
              <div className={switchToggleButton ? 'inputBoxLight' : 'inputBoxDark'}>
                {
                  switchBtnLan ? <input type="submit" value='Send' /> : <input type="submit" value='Enviar' />
                }
              </div>
            </form>
          </div>
        </div>
      </section>
    </body>
  )
}

export default ContactMe