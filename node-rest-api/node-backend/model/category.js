const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let category =new Schema({
    categoryName:{
      type: String
    }
  }, {
      collection: 'category'
    })
module.exports = mongoose.model('Category', category);