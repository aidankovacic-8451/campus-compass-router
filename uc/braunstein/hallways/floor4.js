"use strict";
/* eslint-disable default-case */
Object.defineProperty(exports, "__esModule", { value: true });
var room_finder_1 = require("room-finder");
var LEFT = room_finder_1.Direction.LEFT, RIGHT = room_finder_1.Direction.RIGHT, FRONT = room_finder_1.Direction.FRONT;
var hallways = [
    // 
    new room_finder_1.Hallway([
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("stair 198a", 4)),
        new room_finder_1.Room("401", LEFT),
        new room_finder_1.Room("402", RIGHT),
        new room_finder_1.Room("409", LEFT),
        new room_finder_1.Room("406", RIGHT),
        new room_finder_1.Room("415", LEFT),
        new room_finder_1.Room("416", RIGHT),
        new room_finder_1.Room("421", LEFT),
        new room_finder_1.Room("422", RIGHT),
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("elevator 197a", 4), "the elevator"),
        new room_finder_1.Room("425", LEFT),
        new room_finder_1.Room("426", RIGHT),
        new room_finder_1.Room("430", RIGHT),
        new room_finder_1.Turn(room_finder_1.Direction.LEFT),
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("stair 198b", 4)),
    ])
];
exports.default = hallways;
//# sourceMappingURL=floor4.js.map