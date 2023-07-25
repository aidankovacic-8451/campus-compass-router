var testBuilding = require('../uc/test/index')
var braunsteinHall = require('../uc/braunstein/index')

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const buildings = {
  "braunstein-uc": braunsteinHall,
  "test": testBuilding
}

/*
  Route Generation Router.
  Building is selected by via URL
  Example: http://localhost:3000/route/uc/braunstein
  JSON Format:
  {
    "fromLocation": string,
    "toLocation": string,
    "accessibility": bool
  }
*/
router.post('/route/uc/:building', function(req, res) {
  let buildingParam = String(req.params.building).toLowerCase();
  let fromLocation = req.body.fromLocation;
  console.log(fromLocation);
  let toLocation = req.body.toLocation;
  console.log(toLocation);
  let accessibility = req.body.accessibility;
  console.log("Accessibility: " + accessibility);
  let building = buildings[buildingParam];
  console.log(building)
  let buildingType = accessibility ? building.accessible : building.all;
  let route = buildingType.getDirections(fromLocation, toLocation);
  console.log(route);
  return res.send(route);
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
  return res.send(route);
});

module.exports = router;
