var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};

// newTodo.save().then( (doc)=> {
//   console.log('Saved todo', doc);
// }, (err) => {
//   console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//   text: 'complete this lecture'
// });
// otherTodo.save().then( (doc)=> {
//   console.log('Saved todo', doc);
// }, (err) => {
//   console.log('Failed to save todo', err);
// })
