import mongoose from "mongoose";
import NoteMessage from "../models/notesModel.js";
import { createTrash,} from "../utils/utils.js";


export const getNotes = async (req,res) => {
    try {
        const notesMessages  = await NoteMessage.find();
        res.send(notesMessages)
    } catch (error) {
        res.send({message: error.message});
    }
}

export const createNotes = async (req,res) => {
    const note = req.body;
    const newNote = new NoteMessage(note);

    try {
        await newNote.save();
        res.send(newNote);
    } catch (error) {
        res.send(error.message);
    }
}

export const updateNote = async (req, res) => {
    const note = req.body;
    if(!mongoose.Types.ObjectId.isValid(note._id)) return res.send('No Note with that ID');
    const updateNote = await NoteMessage.findByIdAndUpdate(note._id,note, {new:true});
    res.send(updateNote);
}

export const deleteNote = async (req, res) => {
    const {id:_id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.send('No Note with that ID');
    const deleteNote = await NoteMessage.findByIdAndDelete(_id);
    const TrashNote = await createTrash(deleteNote);
    res.send(TrashNote);
}