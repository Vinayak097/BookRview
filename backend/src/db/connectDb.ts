import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
async function connectDb() {
    try{
        console.log(process.env.MONGO_DB_URL , ' database url')
       await mongoose.connect(process.env.MONGO_DB_URL!)
    }  catch(e){
        console.log(e , 'connection db failed')
        throw new Error
    } 
}
export default connectDb