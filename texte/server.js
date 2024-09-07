 import express, { json } from 'express';
 import path from 'path';
 import { fileURLToPath } from 'url';
import {connectdb} from './src/services/mongoose1.js'
import dotenv from 'dotenv'; 
import {User} from './src/model/user.js'
// Load environment variables from .env file
dotenv.config();
connectdb();
//connection a la db 
connectdb().catch(err => console.log(err));

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename); // Correct way to get the directory path
 const app = express();

app.use(express.json());
 app.post('/users', async (req, res, next) =>{

    const user = new User(req.body);
    try {
        const saveUser = await user.save();
        res.status(205).send(saveUser);    
    } catch (error) {
        res.status(400).send(error);
        
    }

 })


//  app.use('/public', express.static(path.join(__dirname, '/public')))

 // -----------------creation de le route principal-----------------------------
//  app.get('/', (req, res) => {
//    res.sendFile(path.join(__dirname, 'html', 'login.html'));
//  });
//  app.use('/images', express.static(__dirname + '/images/')); // Now uses __dirname correctly


app.listen(5500, () => {
   console.log('Server listening on port http://localhost:5500');
 });
