const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let advertisor = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }
}, {
  collection: 'advertisors'
})

module.exports = mongoose.model('Advertisor', advertisor)