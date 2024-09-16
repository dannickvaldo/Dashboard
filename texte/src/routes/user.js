
import express, { json } from 'express';
import {User} from '../model/user.js';
import {authentification} from '../middlerwares/authentification.js'

 const router = new express.Router();



 router.get('/foo', (req, res) => {
  res.send('texte');
});


//creation de la route  POST

router.post('/users', async (req, res, next) =>{

    const user = new User(req.body);
    try {
        const token = await user.generedToken();
        res.status(201).send({ user, token});    
    } catch (error) {
      res.status(400).send({ error: error.message });   
    }
 });


 /////// deconnection d'un utilisateur

 router.post('/users/logout',authentification, async (req, res, next) =>{

  try {
    req.user.tokens = req.user.tokens.fileter((tokens) => {
      return token.token!==req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();   
  }
});

// supresion de tous les utilisateur

router.post('/users/logout/all',authentification, async (req, res, next) =>{

  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send('une erreur 500 detecter');   
  }
});



 router.post('/users/login', async (req, res) =>{

  try {
      const user = await User.findUser(req.body.email, req.body.password);
      const token = await user.generedToken();
      res.send({ user, token});
  } catch (error) {
      res.status(400).send('syntax error');    
  }
});

//creation de la route  GET

router.get('/users', authentification, async (req, res, next) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur.' }); // Retourne une erreur au client
  }
}); 
router.get('/users/me', authentification, async (req, res, next) => {
  res.send(req.user);
}); 


//         creation de la route  PATCH

router.patch('/users/:id', async(req, res) =>{
  try {
    const user = await User.findById(userId);
    updatedinfo.forEach(update => { user[update]= req.body[update] });
    await user.save();

    if(!user){
      res.status(404).send('lutilisateur na pa ete cree')
    } else{
      res.send(user);
    }
  } catch (error) {
    res.status(500).send(error);
      
  }
});


//         creation de la route  dellet



router.patch('/users/:id', async(req, res, next) =>{

  const userId = req.params.id;

  try {
    const user = await User.findByIdAndDelete(userId);
    await user.save();

    if(!user){
      res.status(404).send('lutilisateur na pa ete cree')
    } else{
      res.send(user);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
export{router};








     





















//   router.use('/public', express.static(path.join(__dirname, '/public')))

//  // -----------------creation de le route principal-----------------------------
//   router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'html', 'indexb.html'));
//   });
//   router.use('/images', express.static(__dirname + '/images/')); // Now uses __dirname correctly
