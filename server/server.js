var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User}= require('./models/User');
var {Todo2}= require('./models/Todo2');

var app = express();

app.use(bodyParser.json());   //adding middleware to parse body content

app.post('/todos',(req, res)=> {
  var todo = new Todo2({
    text:req.body.text
  });

  todo.save().then((doc)=> {
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});

app.listen(1000, () =>{
  console.log('Started on port 1000');
});
