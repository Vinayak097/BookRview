import React from 'react'
import { books } from '../components/Mockdata';

const BookList = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange=(e:any)=>{
    e.preventDefault();
    setSearchTerm(e.target.value);
    // This function will handle the search input change
    // You can implement the logic to filter books based on the search term
    console.log(searchTerm);
  }
  return (
    
        
        <div className='h-full bg-gray'>
          
          <div className='lg:pl-[119px]   lg:pt-[60px] lg:pb-[60px] p-3'>
              <div>
              <p className='font-semibold text-[24px] lg:text-[32px]'>Explore books</p>
              </div>

              <div>
                <input onChange={(e)=>{handleChange(e)}} className='mt-2 w-[22rem] p-2 shadow-md bg-white rounded-lg' type="text" placeholder='search' />
              </div>

              <div className='mt-6'>
                {books.map((book,index)=>(
                  <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4' key={index}>
                    <div className=' w-fit'>
                      <img className='   object-fit rounded-lg cursor-pointer transition-transform duration-700 ease-out hover:scale-102 hover:shadow-2xl' src={book.image} alt={book.name} />
                      <div className='mt-2 flex justify-center border'>
                        <h3 className=''><span className='text-neutral-700'>by </span><span className='text-lg font-semibold'>{book.author}</span> </h3>
                        <p className='text-sm text-gray-600'></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>          
          </div>

        
    </div>
  )
}

export default BookList