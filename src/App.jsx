import { Route, Routes } from 'react-router-dom'
import './App.css'
import BottomNavigationBar from './components/BottomNavigationBar'
import ContactMe from './pages/ContactMe'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contactMe' element={<ContactMe />} />
      </Routes>
      <BottomNavigationBar />
    </div>
  )
}

export default App
