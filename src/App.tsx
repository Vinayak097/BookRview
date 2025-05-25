import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import FeatureBooks from './components/FeatureBooks'
import HeroSection from './pages/HeroSection'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookList from './pages/BookList'
import UserProfile from './pages/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen w-full '>
        <Navbar></Navbar>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeroSection></HeroSection>}></Route>
          <Route path='/books' element={<BookList></BookList>}></Route>
          <Route path='/profile' element={<UserProfile></UserProfile>}></Route>

        </Routes>
        
        </BrowserRouter>
         
         
         
         
      </div>
    </>
  )
}

export default App
