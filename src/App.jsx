import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import BottomNavigationBar from './components/BottomNavigationBar'
import ToggleButton from './components/ToggleButton'
import ContactMe from './pages/ContactMe'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'


function App() {

  const [switchToggleButton, setSwitchToggleButton] = useState(false)

  const handleToggleButton = () => {
    switchToggleButton ? setSwitchToggleButton(false) : setSwitchToggleButton(true)
  }

  return (
    <div className="App">
      <ToggleButton 
        switchToggleButton={switchToggleButton}
        handleToggleButton={handleToggleButton}
      />
      <Routes>
        <Route path='/' element={<Home switchToggleButton={switchToggleButton} />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contactMe' element={<ContactMe />} />
      </Routes>
      <BottomNavigationBar />
    </div>
  )
}

export default App
