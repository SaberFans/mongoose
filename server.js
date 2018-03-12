var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  iotModel = require('./api/models/iotModel'), //created model loading here
  housePrModel = require('./api/models/houseprModel')
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/iot'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/iotRouter'); //importing route
routes(app); //register the route


app.listen(port);

console.log('IoT data store API server started on: ' + port);