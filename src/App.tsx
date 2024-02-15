import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Intro from './page/Intro'
import LeftMenu from './components/left-menu/LeftMenu'
import Pages from './page/Pages'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <LeftMenu/>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/*" element={<Pages/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
