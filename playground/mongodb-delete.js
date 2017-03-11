// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unsable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then( (result) => {
  //   console.log(result);
  // }, (err) => {
  //
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then( (result) => {
  //   console.log(result)
  // });
  //
  // // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then( (doc) => {
  //   console.log(doc);
  // });

  // db.collection('Users').deleteMany({name: 'KenEllis'}).then( (result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Error: ', err);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('58c36bb97484ad185813f888')
  }).then( (doc) => {
    console.log(doc);
  })


  // db.close();
});
