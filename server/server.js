var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
const {ObjectID} = require('mongodb');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then( (doc)=> {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });

});

app.get('/todos', (req, res) => {
  Todo.find().then( (todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

app.get('/todos/:id', (req, res) => {
  var {id} = req.params;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }
  Todo.findById(id).then( (todo) => {
    if(!todo) {
      res.status(404).send();
    }
    res.send({todo});
  }).catch( (e) => {
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  //get the id
  var {id} = req.params;
  //validate the id -> not valid? return 404
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then( (todo) =>{
    if (!todo) {
      res.status(404).send();
    }
    res.send({todo});
  }).catch( (err) => {
    res.status(404).send();
  });
    //success
      //if no doc, send 404
      //if doc, return doc with 200
    //error
      //400 with empty body
})


module.exports = {app};
