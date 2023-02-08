import express from 'express'
import { deleteTrash, getTrashs, retriveNote } from '../controllers/Trashs.js';

const router = express.Router();

router.get('/', getTrashs);
router.delete('/:id', deleteTrash);
router.post('/', retriveNote);

export default router;