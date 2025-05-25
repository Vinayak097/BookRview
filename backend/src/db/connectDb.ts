import mongoose from "mongoose"

async function connectDb() {
    try{
       await mongoose.connect(process.env.MONGO_DB_URL!)
    }  catch(e){
        console.log(e , 'connection db failed')
        throw new Error
    } 
}
export default connectDb