var express = require('express'),
  http = require('http'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  iotModel = require('./api/models/iotModel'), //created model loading here
  housePrModel = require('./api/models/houseprModel'),
  bodyParser = require('body-parser');
  

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/iot'); 
// var db = mongoose.connection;
// var Schema = mongoose.Schema;


// var IoTSchema = new Schema({
//   temp: {
//     type: Number,
//     required: 'Input the Temperature'
//   },
//   humidity: {
//     type: Number,
//     required: 'Input the Humidity'
//   },
//   Created_date: {
//     type: Date,
//     default: Date.now
//   }
// });
// var IoT = mongoose.model('IoT', IoTSchema);

// IoT.findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, post) {

//   console.log( post );
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/iotRouter'); //importing route
routes(app); //register the route

app.listen(port);

console.log('IoT data store API server started on: ' + 3000);

var socket_app = require('http').createServer(handler),
  io = require('socket.io').listen(socket_app),
    fs = require('fs'),
  sys = require('util'),
  exec = require('child_process').exec,
  child;
// socket_app listen on port 8000

socket_app.listen(8000);
// If all goes well when you open the browser, load the index.html file
function handler(req, res) {
    fs.readFile(__dirname+'/index.html', function(err, data) {
        if (err) {
      		// If no error, send an error message 500
            console.log(err);
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200);
        res.end(data);
    });
}
 
// When we open the browser establish a connection to socket.io. 
// Every 5 seconds to send the graph a new value.


io.sockets.on('connection', function(socket) {
  setInterval(function(){
      // You must send time (X axis) and a temperature value (Y axis) 
      var date = new Date().getTime();
      var temp = parseFloat("22") + Math.random() * (1 - 0.5) + 0.5;
      console.log(temp);

      var date = new Date().getTime();
      var humdity = parseFloat("50") +(Math.random() * (1 - 0.2) + 0.2);
      socket.emit('temperatureUpdate', date, temp); 
      socket.emit('humidityUpdate', date, humdity); 	
  }, 10000);
});