var testBuilding = require('../uc/test/index')

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/route/uc/braunstein', function(req, res) {
  return res.send("Test");
});

router.post('/route/test', function(req, res) {
  let fromLocation = req.body.fromLocation;
  console.log(fromLocation);
  let toLocation = req.body.toLocation;
  console.log(toLocation);
  let route = testBuilding.getDirections(fromLocation, toLocation);
  console.log(route);
  res.send(route);
});

module.exports = router;
