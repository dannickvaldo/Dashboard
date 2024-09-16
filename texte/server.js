 import express, { json } from 'express';
import {connectdb} from './src/services/mongoose1.js'
import dotenv from 'dotenv'; 
import { router } from './src/routes/user.js';
// Load environment variables from .env file
dotenv.config();
//connection a la db 
connectdb().catch(err => console.log(err));

//creation de l'application
 const app = express();
app.use(express.json());

// lancement sur Route
app.use(router);

//demarrage de l'application au port 
app.listen(5500, () => {
   console.log('Server listening on port http://localhost:5500');
 });