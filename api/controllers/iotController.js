'use strict';


var mongoose = require('mongoose'),
  IoT = mongoose.model('IoT');

exports.show_all = function(req, res) {
  IoT.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};
exports.add_data = function(req, res) {  
  console.log(req.body)
  var dobj = new IoT(req.body);
  console.log(dobj)
  dobj.save(function (err, data) {
  if (err)
    res.send(err);
  res.json(data)
});
}
