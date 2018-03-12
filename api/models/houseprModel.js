'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var houseprSchema = new Schema({
  price: {
    type: Number,
    required: 'Input the price'
  },
  year: {
    type: Number,
    required: 'Input the year'
  },
  area: {
    type: String,
    required: 'Input the area'
  }
});

module.exports = mongoose.model('housePr', houseprSchema);