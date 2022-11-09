import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import BottomNavigationBar from './components/BottomNavigationBar'
import ToggleButton from './components/ToggleButton'
import ToggleLanguage from './components/ToggleLanguage'
import ContactMe from './pages/ContactMe'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'


function App() {

  const [switchToggleButton, setSwitchToggleButton] = useState(false)
  const [switchBtnLan, setSwitchBtnLan] = useState(false)

  const handleToggleButton = () => {
    switchToggleButton ? setSwitchToggleButton(false) : setSwitchToggleButton(true)
  }

  const handleBtnLan = () => {
    switchBtnLan ? setSwitchBtnLan(false) : setSwitchBtnLan(true)
  }

  return (
    <div className="App">
      <section className='toggleButtons'>
        <ToggleButton 
          switchToggleButton={switchToggleButton}
          handleToggleButton={handleToggleButton}
        />
        <ToggleLanguage
          switchBtnLan={switchBtnLan}
          handleBtnLan={handleBtnLan}
        />
      </section>
      <Routes>
        <Route path='/' element={<Home switchToggleButton={switchToggleButton} />} />
        <Route path='/skills' element={<Skills switchToggleButton={switchToggleButton} />} />
        <Route path='/projects' element={<Projects switchToggleButton={switchToggleButton} />} />
        <Route path='/contactMe' element={<ContactMe switchBtnLan={switchBtnLan} switchToggleButton={switchToggleButton} />} />
      </Routes>
      <BottomNavigationBar switchToggleButton={switchToggleButton} />
    </div>
  )
}

export default App
