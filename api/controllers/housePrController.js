'use strict';


var mongoose = require('mongoose'),
  housepr = mongoose.model('housePr');

exports.show_all = function(req, res) {
  housepr.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};
exports.add_data = function(req, res) {  
  console.log(req.body)
  var dobj = new housepr(req.body);
  console.log(dobj)
  dobj.save(function (err, data) {
  if (err)
    res.send(err);
  res.json(data)
});
}
