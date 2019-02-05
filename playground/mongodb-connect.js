// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');  //using object destruction feature of ES6+

// MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client) => {
//     if(err) {
//         return console.log('Unable to connect to MongoDB server');
//     }
//     console.log('Connected to MongoDB server');
//
//     const db = client.db('TodoApp')
//
//     db.collection('Todos').insertOne({
//       text:'Something to do',
//       completed: false
//     },(err,result) => {
//         if(err){
//           return console.log('Unable to insert todo',err);
//         }
//
//         console.log(JSON.stringify(result.ops, undefined, 2));
//     })
//
//     client.close();
// });

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected successfully to MongoDB');
  const db= client.db('TodoApp');
  db.collection('Users').insertOne({
      name: 'Durgesh',
      age: 32,
      location:'India'
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert Users',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  })

  client.close();
});
