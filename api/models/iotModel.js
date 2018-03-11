'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var IoTSchema = new Schema({
  temp: {
    type: Number,
    required: 'Input the Temperature'
  },
  humidity: {
    type: Number,
    required: 'Input the Humidity'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('IoT', IoTSchema);