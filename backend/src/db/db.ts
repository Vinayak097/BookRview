import mongoose, { model, Schema } from 'mongoose'

const bookSchema=new Schema({
    name:{require:true,
        type:String
    },
    author:{
        require:true,
        type:String
    },
    image:{
        require:true,
        type:String
    },
})

export const Book = model('book', bookSchema);

