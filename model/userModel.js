import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    bookName: {
        type : String,
        required : true,
    },

    author: {
        type : String,
        required : true,
    },

    price: {
        type : Number,
        required : true,
    },

    condition: {
        type : String,
        required : true,
    },

    ownerName : {
        type : String,
        required : true,
    },

    contactEmail: {
        type : String,
        required : true,
    }
});

export default mongoose.model("Books",BookSchema);