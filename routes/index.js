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

/*
  Test demonstration function working on a test building.
  JSON Format:
  {
    "fromLocation": string,
    "toLocation": string,
    "accessibility": bool
  }
*/
router.post('/route/test', function(req, res) {
  let fromLocation = req.body.fromLocation;
  console.log(fromLocation);
  let toLocation = req.body.toLocation;
  console.log(toLocation);
  let accessibility = req.body.accessibility;
  console.log("Accessibility: " + accessibility);
  let building = accessibility ? testBuilding.testBuildingAccessible : testBuilding.testBuilding;
  let route = building.getDirections(fromLocation, toLocation);
  console.log(route);
  res.send(route);
});

module.exports = router;
