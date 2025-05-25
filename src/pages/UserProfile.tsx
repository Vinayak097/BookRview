import React from 'react'
import { User2 } from 'lucide-react'
import { userData } from '../components/Mockdata'
const UserProfile = () => {
  return (
    
        <div className='h-full '>
          <div className='flex bg-gray lg:pl-[119px]   lg:pt-[60px] lg:pb-[60px] p-3  rounded-full overflow-hidden'>
            <img className=' w-28 rounded-full'  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="DP" />
            <div className='lg:ml-8 ml-4'>
                <h1 className='text-2xl font-semibold'>{userData.name}</h1>
                <p className='mt-2 text-gray-600 text-sm'>{userData.email}</p>
                <br />
                <p className='text-neutral-700'>{userData.boi}</p>
                <div>
                    <h1 className='text-gray-500 mt-4'>Favorite Genres</h1>
                    <div className='flex gap-2 mt-2'>
                        {userData.genre.map((genre,index)=>(
                        
                            <p className='w-fit px-2 text-[14px] text-neutral-700 rounded-full bg-gray-200 py-1'>{genre}</p>
                        
                    ))}

                    </div>
                    
                </div>
            </div>

            
        </div>

        
        <div className='mx-12 mt-12 '>
            <div className='flex gap-8 text-gray-500 text-sm m-4 font-medium'>
                <p className='text-indigo-500'>Reviews(1)</p>
                <p>Favorites(2)</p>
            </div>
            <div className='border w-16 mx-4 border-indigo-700'></div>
            <div className='w-full border border-gray-200'></div>

        </div>
    </div>
  )
}

export default UserProfile