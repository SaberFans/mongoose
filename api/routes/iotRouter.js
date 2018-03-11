'use strict';
module.exports = function(app) {
  var iotController = require('../controllers/iotController');

  
  // temp Routes
  app.route('/data/temp')
    .get(iotController.show_all)
    .post(iotController.add_data);

};