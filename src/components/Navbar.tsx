import React from 'react'
import { BookOpen, User2 } from 'lucide-react'
const Navbar = () => {
    const isScrolled=false
  return (
    <div className='h-[44px] text-[#1d1d1f]  bg-gray text-sm font-normal items-center'>
        <nav className='h-full'>
            <div className='lg:mx-[165px] mx-4 sm:mx-4 flex  justify-between items-center  py-2'>
                <div className='flex items-center gap-2'>
                    <BookOpen className="h-6 w-6 text-indigo-900" />
          <span className={`font-semibold text-xl ${isScrolled ? 'text-indigo-900' : 'text-indigo-900'}`}>Libretto</span>

                </div>

                <div >
                    <ul className=' hidden md:block lg:flex gap-4 lg:gap text:12 '>
                        <a href='/'>Home</a>
                        <a href='/books'>books</a>
                        <a href='/profile'>profile</a>
                    </ul>
                </div>

                <div>
                    <ul>
                        <a href='/profile' className='flex items-center gap-2'>
                            <User2 href='' className='h-6 w-5 text-gray-500 cursor-pointer ' />
                        </a>
                    </ul>                    
                </div>
            </div>
            
            
        </nav>
    </div>
  )
}

export default Navbar