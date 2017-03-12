const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '58c41f2eb6510fb43335b7f5';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then( (todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then( (todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then( (todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

// User.findByID
// case 1: it works, but no user
// case 2: user found, print it to screen
// case 3: handle errors

User.findById(id).then( (user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User by ID: ', user);
}).catch( (e) => console.log(e));
