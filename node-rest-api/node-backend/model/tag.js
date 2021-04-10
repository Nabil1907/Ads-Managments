const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let tag =new Schema({
    tagName:{
      type: String
    }
  }, {
      collection: 'tag'
    })
module.exports = mongoose.model('Tag', tag);
