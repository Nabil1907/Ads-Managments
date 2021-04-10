const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ads = new Schema({
  title: {
    type: String
  },
  type: {
    type: String
  },
  tag: {
    type: String
  },
  category: {
    type: String
  },
  advertisor: {
    type: String
  },
  start_date: {
    type: Date
  },
  end_date: {
    type: Date
  },
  photoUrl: {
    type: String
  },
  description: {
    type: String
  }
}, {
  collection: 'ads'
})



module.exports = mongoose.model('Ads', ads);
