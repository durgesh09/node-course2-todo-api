var mongoose = require('mongoose');

var Todo2 = mongoose.model('Todo2',{
  text:{
    type:String,
    required: true,
    minlength:1,
    trim:true
  },
  completed: {
    type: Boolean,
    default:false
  },
  completedAt:{
    type: Number,
    default:null

  }
});

// var newTodo = new Todo2({
//   text: 'Cook dinner'
// });

// var newTodo = new Todo2({
//   text: 'Edit this video'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo',doc);
// }, (e) =>{
//   console.log('Unable to save todo');
// });

module.exports = {Todo2};
