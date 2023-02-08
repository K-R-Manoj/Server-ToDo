import mongoose from "mongoose";
import TrashMessage from "../models/trashModel.js";
import { retrive_Note } from "../utils/utils.js";

export const getTrashs = async (req,res) => {
    try {
        const trashMessages  = await TrashMessage.find();
        res.send(trashMessages)
    } catch (error) {
        res.send({message: error.message});
    }
}

export const deleteTrash = async (req,res) => {
    const {id:_id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.send('No Note with that ID');
    const deleteTrash = await TrashMessage.findByIdAndDelete(_id);
    res.send(deleteTrash);
}

export const retriveNote = async (req,res) => {
    const trashNote = req.body;
    const {newRetriveNote} = await retrive_Note(trashNote); 
    res.send(newRetriveNote);
}