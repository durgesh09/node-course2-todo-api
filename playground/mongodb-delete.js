// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');  //using object destruction feature of ES6+

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected successfully to MongoDB');

  //db connection and query
  const db = client.db('TodoApp');

  //**** delete many
  // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result) => {
  //   console.log(result);
  // });
   // db.collection('Users').deleteMany({age:33}).then((result) => {
   //   console.log(result);
     db.collection('Users').deleteOne({name:'DP'}).then((result) => {
       console.log(result);
  //****delete one
  // db.collection('Todos').deleteOne({text:'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

//**** findoneand delete
  // db.collection('Todos').findOneAndDelete({name:'DP'}).then((result) => {
  //   console.log(result);
  });



//  client.close();
});
