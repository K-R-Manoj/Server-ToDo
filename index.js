import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import NoteRoutes from './routes/Notes.js';
import TrashRoutes from './routes/Trashs.js';


const app = express();
dotenv.config();

app.use(express.json());
/*  Using this because to parse json data.Meaning that it is the format that data exchange b/w frontend(FE) and backend(BE).
For that we were using body parser a third pary library . For that express team integrated the body parser inside the express so we dont have to use the third party library.
So we just use app.use(express.json())
*/

app.use(cors());

app.use('/notes', NoteRoutes);
app.use('/trash', TrashRoutes);

// CORS ;- Cross Origin request security                                   
/*  FE:-localhost:4200
    BE :- localhost:3000
    since FE and BE are on different ports the express rejects the request from the FE . to prevent that we use cors
*/

const PORT  = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(()=> app.listen(PORT,()=> console.log(`Server running on Port: ${PORT}`)))
    .catch((error)=>{console.log(error.message);});
