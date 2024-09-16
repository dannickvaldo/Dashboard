import mongoose from 'mongoose';
import validator from 'validator';
import  bcrypt from'bcryptjs';
import jwt from 'jsonwebtoken'; 
     

const userShema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase:true,
            trim:true,
            validate: {
                validator: (v) => validator.isEmail(v),
                message:"Email non valide!"
            }
            },
        password: {
            type: String,
            required: true,
            
            validate: {
                validator: (v) => validator.isLength(v, { min: 4, max: 20 }),
                message: 'Le mots de passe doit etre compris entre 4 et 20 caracteres!'
            }
        },
        tokens:[{
            token:{
                type:String,
                required: true
            }
        }]

    }
);

userShema.methods.generedToken = async function(){
     // Génération d'un jeton JWT
const token = jwt.sign({_id: this._id.toString()}, 'dannick'); 
this.tokens.push({token});
await this.save();
return token;
};



userShema.statics.findUser = async(email, password) => {
    const user = await User.findOne({email});
    if(!user){
        throw new Error('lutilisateur ne peux ce connecter') ;
       }
    const isPasswordValid= await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        throw new Error('l utilisateur ne peux ce connecter') ;
    }
    
    return user;
}

userShema.pre('save',async function(){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 8);
    }
});


const User = mongoose.model('User', userShema);


export {User};