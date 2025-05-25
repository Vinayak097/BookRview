import e from "express";
import { Book } from "../db/db";
import { bookScheam } from "../validation/validation";
const router=e.Router();

// GET /books - Retrieve all books (with pagination)
// GET /books/:id - Retrieve a specific book
// POST /books - Add a new book (admin only)

router.get('/',async( req,res)=>{
    try{
        const books=await Book.find();
        res.status(200).json(books)
        return;
    }   catch(e) {
        console.log("error in getting books " , e)
        res.status(500).json({message:"internal server error"})

    }
})

router.post('/',async(req,res)=>{
    const body=req.body;
    const payload=bookScheam.safeParse(req.body);
    try{
        if(!payload.success){
            res.status(411).json({message:'invalid data'})
            return;
        }

        await Book.insertOne({
            name:payload.data.name,
            author:payload.data.author,
            image:payload.data.image
        })
        res.status(201).json({message: "book saved"})
    }catch(e){
        console.log("error inserting book")
        res.status(500).json({message:"internal server error"})
        return;
    }
})


router.get("/:id",async(req,res)=>{
    const id=req.params.id;
    try{
        const book=await Book.findById({id})
        res.status(200).json({book, message:"retrived"})
        return;
    }catch(e){
        console.log("error inserting book")
        res.status(500).json({message:"internal server error"})
        return;

    }
})


export default router;