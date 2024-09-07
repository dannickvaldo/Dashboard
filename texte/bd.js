// import { MongoClient } from 'mongodb';
// import dotenv from 'dotenv'; 

// // Load environment variables from .env file
// dotenv.config();

// // MongoDB connection
// const mongoUrl = process.env.MONGO_URL; // Assurez-vous que l'URL est correcte
// const client = new MongoClient(mongoUrl);

// async function main(){
//     await client.connect();
//     console.log('Connection OK!'); 
//     const db = client.db('dannick'); 
//     const collection = db.collection('document');

//  ////             creer  des elements   
//     // try {
//     //     const insertdada = await collection.insertMany([
//     //         {
//     //             nom:'dannick',
//     //             prenom: 'kiorr' ,
//     //             age:19,
//     //         },
//     //         {
//     //             nom:'dannick',
//     //             prenom: 'kiorr' ,
//     //             age:19,
//     //         } ,
//     //        {
//     //             nom:'dannick',
//     //             prenom: 'kiorr' ,
//     //             age:19,
//     //         }
//     //     ])
        
//     // } catch (error) {
//     //     throw error;   
//     // }
//     // console.log('donner inserer=>', insertdada);


//  // -------------------------lire des element sur le terminal--------------------------------   
//     // try {

//     //     const lire= await collection.findOne({nom:'dannick'});
//     //     console.log('lelement chercher est =>', lire);


        
//     // } catch (error) {
//     //     throw error;
        
//     // }
   
 
//  //----------------------------mettre ajour------------------------------------------------------------
 
 
//     // try {
//     //     const updat = collection.updateOne({nom:'dannick'},{$set : { nom:'valdo', prenom:'valdes', age:10 }});
//     //     console.log(await updat);    
//     // } catch (error) {
//     //     throw error;
//     // }
//     // try {
//     //     const updatage = collection.updateMany({age:10},{$set : { age:111 }});
//     //     console.log(await updatage);    
//     // } catch (error) {
//     //     throw error;
//     // }

// //------------------------la supresion des element dans la bd-------------------------


//        try {
//         const supresion= collection.deleteMany({age:111});
//         console.log(await supresion);
        
//        } catch (error) {
//         throw error;
        
//        }





//     return 'done!';
// }

// main()
// .then(console.log('dannickj dada base connectionb succes'))
// .catch(console.error)
// .finally(() => client.close());