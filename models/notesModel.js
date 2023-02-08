import mongoose from "mongoose";

const NoteSchema = mongoose.Schema({
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

const NoteMessage = mongoose.model('NoteMessage',NoteSchema);

export default NoteMessage;