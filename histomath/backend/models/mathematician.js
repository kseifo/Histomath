// models/mathematician.js
const mongoose = require('mongoose');

const mathematicianSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  birthday: {
    type: String,
    required: true
  },
  biography: {
    type: String,
    required: true
  },
  finding1: {
    type: String,
    required: false // Make this optional
  },
  finding2: {
    type: String,
    required: false // Make this optional
  },
  finding3: {
    type: String,
    required: false // Make this optional
  }
});

const Mathematician = mongoose.model('Mathematician', mathematicianSchema);
module.exports = Mathematician;
