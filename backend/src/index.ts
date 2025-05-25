import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './db/connectDb';
import bookRoutes from './routes/routes.book'
dotenv.config()
const app=express();
const port =5000;
app.use(cors())
app.use(express.json())

app.use('/book' , bookRoutes)
// app.use('/review' , reviewRoutes)
// app.use('/users',userRoutes)




app.listen(port, async()=>{
    await connectDb()
    
    console.log("server running on port : ", port)
})
