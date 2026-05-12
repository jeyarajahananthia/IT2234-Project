import Books from "../model/userModel.js";

export const create =  async(req,res) => {
    try{
        const bookData = new Books(req.body);
        const {bookName} = bookData;

        const bookExist = await Books.findOne({bookName});

        if(bookExist){
            return res.status(400).json({message : "Book already exist."});
        }

        const saveBook = await bookData.save();

        res.status(200).json(saveBook)
    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message});
    }
}

export const fetch = async(req, res)=>{
    try{
        const books = await Books.find();

        if(books.length === 0){
            return res.status(404).json({message :"Book not found."});
        }

        res.status(200).json(books);
    }
    catch(error){
        res.status(500).json({error:"Internal server error"});
    }
}

export const update = async(req, res)=>{
    try{
        const id = req.params.id; 

        const bookExist = await Books.findOne({_id:id});

        if(!bookExist){
            return res.status(404).json({message:"Book not found."});
        }

        const updateBook = await Books.findByIdAndUpdate(id, req.body,{new : true});

        res.status(201).json(updateBook);
    }
    catch{
        res.status(500).json({error : "Internal server error."});
    }
    
}

export const deleteBook = async(req, res)=>{
    try{
        const id = req.params.id; 

        const bookExist = await Books.findOne({_id:id});

        if(!bookExist){
            return res.status(404).json({message:"Book not found."});
        }

        await Books.findByIdAndDelete(id);

        res.status(201).json({message : "Books deleted successfully"});
    }
    catch{
        res.status(500).json({error : "Internal server error."});
    }
    
}