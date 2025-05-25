import React, { useEffect } from 'react'
import { books } from '../components/Mockdata';

import { backendurl } from '../config';
import { useNavigate } from 'react-router-dom';
const BookList = () => {
  const navigate =useNavigate()
  const [searchTerm, setSearchTerm] = React.useState('');
  const [bookList, setBookList] = React.useState([]);
  const handleChange=(e:any)=>{
    e.preventDefault();
    setSearchTerm(e.target.value);
    // This function will handle the search input change
    // You can implement the logic to filter books based on the search term
    console.log(searchTerm);
  }
  useEffect(()=>{
    async function fetchBooks() {
      const res=await fetch(`${backendurl}/book`)
      const data=await res.json();
      
       setBookList(data) 
      
    }
    fetchBooks()
  },[])
  const handleBlookClick=(id:string)=>{
    
    navigate(`/books/${id}`);

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

              <div className='mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-28 mt-4'>
                {bookList.map((book,index)=>(
                  <div className='' key={index}>
                    <div onClick={()=>{handleBlookClick(book._id)}} className=' flex flex-col items-center justify-center  bg-white shadow-md rounded-lg'>
                      <img className='   h-full w-full rounded-lg cursor-pointer transition-transform duration-700 ease-out hover:scale-102 hover:shadow-2xl' src={book.image} alt={book.name} />
                      <div className=' flex justify-center border w-full'>
                        <h3 className=''><span className='text-neutral-700'>by </span><span className='text-lg font-semibold text-neutral-700'>{book.author}</span> </h3>
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