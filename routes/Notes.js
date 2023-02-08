import express from 'express'

import { getNotes, createNotes, updateNote, deleteNote } from '../controllers/Notes.js';

const router = express.Router();

router.get('/', getNotes);
router.post('/', createNotes);
router.patch('/', updateNote);
router.delete('/:id', deleteNote);

export default router;