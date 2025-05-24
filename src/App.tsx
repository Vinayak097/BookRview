import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import FeatureBooks from './components/FeatureBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen '>
         <Navbar></Navbar>
         <div className='w-full h-[48px] bg-white'>

         </div>
         <div className='h-full bg-gray'>
            <div className='px-[119px] pt-[80px] pb-[60px]'>
              <FeatureBooks></FeatureBooks>
            </div>

         </div>
         
         
      </div>
    </>
  )
}

export default App
