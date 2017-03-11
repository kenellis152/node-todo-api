// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unsable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('58c366a83b83f1474c604fe3')
  // }).toArray().then( (docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //    console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'KenEllis'}).toArray().then( (docs) => {
    console.log('Found Users:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // db.collection('Todos').find().count().then( (count) => {
  //   console.log(`Todos Count: ${count}`);
  // }, (err) => {
  //    console.log('Unable to fetch todos', err);
  // });

  // db.close();
});
