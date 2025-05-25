import React, { useEffect, useState } from 'react'
const featured=[{url:'https://covers.openlibrary.org/b/id/15089031-L.jpg' , title:'Harry Potter and the Goblet of Fire' , author:'J.K. Rowling'},
{url:'https://covers.openlibrary.org/b/id/15024571-L.jpg' , title:'We Were Never Meant To Be' , author:' Palle Vasu'},
{url:'https://covers.openlibrary.org/b/id/11299418-L.jpg' , title:'A Game of Thrones' , author:'George R. R. Martin'},
{url:'https://covers.openlibrary.org/b/id/14856507-M.jpg' , title:'The Blood Serpent' ,author:'Thomas Vancura'}
]
interface Book{
    url:string,
    title:string,
    author:string
}

const Cover = () => {
    const [books,setBooks]=useState(featured);
    useEffect(()=>{
        async function fetchData() {
           
        }
        fetchData();
    },[])
    console.log(books);
  return (
    <div className=''>
       
        <div  className='  '>
             <div className='pt-4 pb-4 pl-2'>
                    <p className='font-semibold text-[24px] lg:text-[32px]'>Featured</p>
            </div>
            

            <div className=' h-full  gap-4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 '>
                {books.map((book:Book)=>(
                <div className=' '>
                    <img  className='w-full h-[300px] object-fit rounded-[30px]  cursor-pointer transition-transform duration-700 ease-out hover:scale-102 hover:shadow-2xl ' src={book.url} alt="image"/>        
                </div>
        ))}
            </div>
        
        </div>
    </div>
    
  )
}

export default Cover