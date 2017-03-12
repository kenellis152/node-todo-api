const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({})
// can't pass in empty document to remove everything, have to pass empty ObjectID

Todo.remove({}).then( (result) => {
  console.log(result);
});

// Todo.findOneAndRemove    //both of these return the doc
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('asdf').then( (doc) => {

});
