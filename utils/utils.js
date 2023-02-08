import mongoose from "mongoose";

import NoteMessage from "../models/notesModel.js";
import TrashMessage from "../models/trashModel.js";

export const createTrash = async (params) => {
    const { Title='', Tag='', Color='', Description='', Time='' }  = params;
    const trashNote = {
        Title,
        Tag,
        Color,
        Description,
        Time,
    }
    const newTrash = new TrashMessage(trashNote);
    try {
        await newTrash.save();
        return newTrash;

    } catch (error) {
        return error.message;
    }
}

export const retrive_Note = async (params) => {   
    const {_id} = params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.send('No Note with that ID');
    const deleteTrash = await TrashMessage.findByIdAndDelete(_id);
    const { Title='', Tag='', Color='', Description='', Time='' } = deleteTrash;
    const retriveNote = {
        Title,
        Tag,
        Color,
        Description,
        Time,
    }
    const newRetriveNote = new NoteMessage(retriveNote);
    try {
        await newRetriveNote.save();
        return newRetriveNote;

    } catch (error) {
        return error.message;
    }

}