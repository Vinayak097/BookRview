import React from 'react'
import { User2 } from 'lucide-react'
const Navbar = () => {
  return (
    <div className='h-[44px] text-[#1d1d1f]  bg-gray text-sm font-normal items-center'>
        <nav className='h-full'>
            <div className='mx-[165px] h-full flex  justify-between items-center  px-4 py-2'>
                <div className='text-indigo-400'>
                    {/* <img className='h-[44px]' src="/Libretto Bookstore Logo Design.png" alt="" /> */}
                    <p className=''>Libretto</p>
                </div>

                <div>
                    <ul className='flex gap-[44px] text:12 '>
                        <li>Home</li>
                        <li>books</li>
                        <li>profile</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li className='p-2 hover:bg-gray-200 rounded-full'>
                            <User2 className='h-6 w-5 text-gray-500  ' />
                        </li>
                    </ul>                    
                </div>
            </div>
            
            
        </nav>
    </div>
  )
}

export default Navbar