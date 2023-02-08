import mongoose from "mongoose";

const TrashSchema = mongoose.Schema({
    Title: {
        type:String,
        trim:true,
    },
    Tag:String,
    Description:{
        type:String,
        trim:true
    },
    Color:String,
    Time:String,
    createdAt:{
        type:Date,
        default:new Date()
    }, 
})

const TrashMessage = mongoose.model('TrashMessage',TrashSchema);

export default TrashMessage;