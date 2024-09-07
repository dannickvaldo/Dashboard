import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
// Load environment variables from .env file
dotenv.config();

async function connectdb(){
    await mongoose.connect(process.env.MONGO_URL);
    console.log('db connecter!');
}


export {connectdb};
