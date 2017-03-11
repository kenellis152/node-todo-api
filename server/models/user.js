var mongoose = require('mongoose');

// User model
// email property - required - trimmed - set string type - min length 1
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports = {User};

// var newUser = new User({
//   email: 'test123'
// });
//
// newUser.save().then( (doc) => {
//   console.log('Saved user', doc);
// }, (err) => {
//   console.log('Failed to save user', err);
// });
