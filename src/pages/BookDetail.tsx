import React, { useEffect, useState } from 'react'
import { getBookById } from '../actions/book';

const BookDetail = () => {
    const [book,setBook]=useState(null);
    const [error ,setError]=useState('')
    useEffect(()=>{
        const bookId = window.location.pathname.split('/').pop(); 
        async function fetchBook() {
            const res=await getBookById(bookId!);
            if(res){
                setBook(res.book);
            } else {
                setError("Book not found");
                console.error("Book not found");
            }
        }
            
        
    },[])
  return (
    <div>
        <div>

        </div>
        
    </div>
  )
}

export default BookDetail