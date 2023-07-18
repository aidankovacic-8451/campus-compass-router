"use strict";
var room_finder_1 = require("room-finder");
var testBuilding = new room_finder_1.Building([
    new room_finder_1.Hallway([
        new room_finder_1.Room("102", room_finder_1.Direction.RIGHT),
        new room_finder_1.Room("103", room_finder_1.Direction.LEFT),
        new room_finder_1.Room("104", room_finder_1.Direction.RIGHT),
        new room_finder_1.Room("105", room_finder_1.Direction.LEFT),
        // All we have to do is add a Turn in the middle of the Hallway.
        new room_finder_1.Turn(room_finder_1.Direction.RIGHT),
        new room_finder_1.Room("106", room_finder_1.Direction.RIGHT),
        new room_finder_1.Room("107"),
        new room_finder_1.Room("108", room_finder_1.Direction.RIGHT),
        new room_finder_1.Room("109", room_finder_1.Direction.LEFT),
    ]),
]);
(0, room_finder_1.assertValidBuilding)(testBuilding);
module.exports = testBuilding;
//# sourceMappingURL=index.js.map