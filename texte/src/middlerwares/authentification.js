
import jwt from 'jsonwebtoken'; 
import {User} from '../model/user.js';

const authentification = async (req, res, next) =>{
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decodetoken = jwt.verify(token, 'dannick');
        const user = await User.findOne({ _id: decodetoken._id, 'tokens.token': token });
        if(!user) throw new Error();
        req.user= user;
        next();    
    } catch (error) {
        res.status(401).send('merci de vous authentifier');   
    }
}

export{authentification};

