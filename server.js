var express = require('express'),
  http = require('http'),
  app = module.exports.app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  iotModel = require('./api/models/iotModel'), //created model loading here
  housePrModel = require('./api/models/houseprModel'),
  bodyParser = require('body-parser');

// set up the socket http handler
var server = http.createServer(app),
  io = require('socket.io').listen(server);
// socket is listening on 8000
server.listen(8000);
  

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/iot'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/iotRouter'); //importing route
routes(app); //register the route

var path = require("path");
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(port);



console.log('IoT data store API server started on: ' + port);

io.sockets.on('connection', function(socket) {
  setInterval(function(){
    console.log('Try to fetch data' + error);
    
      // You must send time (X axis) and a temperature value (Y axis) 
      
      var date = new Date().getTime();
      var temp = parseFloat("22");
      socket.emit('temperatureUpdate', date, temp); 
    
  }, 5000);
});