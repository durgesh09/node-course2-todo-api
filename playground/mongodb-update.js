const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected successfully to MongoDB');

  const db = client.db('TodoApp');
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c5943f08d4bfe7818d27b31')},
  //   {
  //     $set:{
  //       completed:true
  //     }
  //   },
  // {  returnOriginal:false}
  // ).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('5c5873f907b3406464975fa2')},
  //   {
  //     $set:{
  //       name:'Durgesh Patel'
  //     }
  //   },
  // {  returnOriginal:false}
  // ).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c5873f907b3406464975fa2')},
    {
      $inc:{
        age:1
      }
    },
  {  returnOriginal:false}
  ).then((result) => {
    console.log(result);
  });
});
