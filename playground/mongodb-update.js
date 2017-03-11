// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unsable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58c4101760d126df5a20ae48')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  //   }).then( (result)=> {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58c367d0554b7136181fed65')
  }, {
    $set: {
      name: 'Lewis'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then( (result) => {
    console.log(result)
  });

  // db.close();
});
