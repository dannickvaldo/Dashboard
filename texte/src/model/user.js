import mongoose from 'mongoose';
import validator from 'validator';


const User = mongoose.model('User', {
    email:{
        type:String,
        required: true,
        valitade(v) {
            if(!validator.isEmail(v))
                {
                    throw new error('Email non valide!');
                }
        }
    },
    password:{
        type:String,
        required:true,
        valitade(v) {
            if(!validator.isLength(v, { min: 4, max: 20 }))
                {
                    throw new error('Le mots de passe doit etre compris entre 4 et 20 caracteres!');
                }
    }
}});


export {User};
