"use strict";
/* eslint-disable default-case */
Object.defineProperty(exports, "__esModule", { value: true });
var room_finder_1 = require("room-finder");
var LEFT = room_finder_1.Direction.LEFT, RIGHT = room_finder_1.Direction.RIGHT, FRONT = room_finder_1.Direction.FRONT;
var hallways = [
    // 
    new room_finder_1.Hallway([
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("stair 198a", 2)),
        new room_finder_1.Room("201", LEFT),
        new room_finder_1.Room("202", RIGHT),
        new room_finder_1.Room("204", RIGHT),
        new room_finder_1.Room("206", RIGHT),
        new room_finder_1.Room("208", RIGHT),
        new room_finder_1.Room("207", LEFT),
        new room_finder_1.Room("210", RIGHT),
        new room_finder_1.Room("209", LEFT),
        new room_finder_1.Room("212", RIGHT),
        new room_finder_1.Room("211", LEFT),
        new room_finder_1.Room("220", RIGHT),
        new room_finder_1.Room("215", LEFT),
        new room_finder_1.Room("219", LEFT),
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("elevator 197a", 2), "the elevator"),
        new room_finder_1.Room("223", LEFT),
        new room_finder_1.Room("225", LEFT),
        new room_finder_1.Room("227", LEFT),
        new room_finder_1.Room("229", LEFT),
        new room_finder_1.Room("226", LEFT),
        new room_finder_1.Room("230", LEFT),
        new room_finder_1.Room("240", FRONT),
        new room_finder_1.Turn(room_finder_1.Direction.LEFT),
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("stair 198b", 2)),
    ])
];
exports.default = hallways;
//# sourceMappingURL=floor2.js.map