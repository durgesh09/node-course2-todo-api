// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');  //using object destruction feature of ES6+


MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected successfully to MongoDB');

  //db connection and query
  const db = client.db('TodoApp');
  // db.collection('Todos').find(
  //     {_id: new ObjectID('5c588a088d4bfe7818d2668f')
  //   }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });


  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count : ${count}`);
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('Users').find({name:'Durgesh'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined,2));
  },(err)=>{
    console.log('Unable to fetch users',err);
  });

//  client.close();
});
