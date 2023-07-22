"use strict";
var room_finder_1 = require("room-finder");
var LEFT = room_finder_1.Direction.LEFT, RIGHT = room_finder_1.Direction.RIGHT, FRONT = room_finder_1.Direction.FRONT;
var all = new room_finder_1.Building([
    new room_finder_1.Hallway([
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("stair-a", 1)),
        new room_finder_1.Room("111"),
        new room_finder_1.Room("112"),
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("elevator-a", 1), "the elevator"),
    ]),
    // hallway 21 (on 2nd floor)
    new room_finder_1.Hallway([
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("stair-a", 2)),
        new room_finder_1.Room("211"),
        new room_finder_1.Room("212"),
        new room_finder_1.Fork(RIGHT, (0, room_finder_1.reverseConnection)("fork1"), "the 22s"),
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("elevator-a", 2), "the elevator"),
    ]),
    // hallway 22 (on 2nd floor)
    new room_finder_1.Hallway([
        new room_finder_1.Room("221"),
        new room_finder_1.Room("222"),
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("stair-b", 2)),
        new room_finder_1.Fork(FRONT, "fork1", "the 21s"),
    ]),
    // hallway 31 (on 3rd floor)
    new room_finder_1.Hallway([
        new room_finder_1.Room("311", RIGHT),
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("stair-a", 3)),
        new room_finder_1.Room("312"),
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("elevator-a", 3), "the elevator"),
    ]),
    // hallway 32 (on 3rd floor)
    new room_finder_1.Hallway([
        new room_finder_1.Room("321"),
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("stair-b", 3)),
        new room_finder_1.Room("322"),
    ]),
]);
(0, room_finder_1.assertValidBuilding)(all);
var accessible = all.withAllowedConnectionTypes(function (s) { return !s.includes("stair"); });
module.exports = { testBuilding: all, accessible: accessible };
//# sourceMappingURL=index.js.map