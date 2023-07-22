"use strict";
/* eslint-disable default-case */
Object.defineProperty(exports, "__esModule", { value: true });
var room_finder_1 = require("room-finder");
var LEFT = room_finder_1.Direction.LEFT, RIGHT = room_finder_1.Direction.RIGHT, FRONT = room_finder_1.Direction.FRONT;
var hallways = [
    // 
    new room_finder_1.Hallway([
        new room_finder_1.Stairs(FRONT, (0, room_finder_1.onFloor)("stair 198a", 1)),
        new room_finder_1.Room("101", LEFT),
        new room_finder_1.Room("100", RIGHT),
        new room_finder_1.Room("102", RIGHT),
        new room_finder_1.Room("104", RIGHT),
        new room_finder_1.Room("105", LEFT),
        new room_finder_1.Room("106", RIGHT),
        new room_finder_1.Room("108", RIGHT),
        new room_finder_1.Room("110", RIGHT),
        new room_finder_1.Room("113", LEFT),
        new room_finder_1.Room("112", RIGHT),
        new room_finder_1.Room("115", LEFT),
        new room_finder_1.Room("116", RIGHT),
        new room_finder_1.Room("117", LEFT),
        new room_finder_1.Room("118", RIGHT),
        new room_finder_1.Room("119", LEFT),
        new room_finder_1.Room("122", RIGHT),
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("elevator 197a", 1), "the elevator"),
        new room_finder_1.Room("124", RIGHT),
        new room_finder_1.Room("125", LEFT),
        new room_finder_1.Room("127", LEFT),
        new room_finder_1.Room("129", LEFT),
        new room_finder_1.Room("130", RIGHT),
        new room_finder_1.Room("140", FRONT),
        new room_finder_1.Turn(room_finder_1.Direction.LEFT),
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("stair 198b", 1)),
    ])
];
exports.default = hallways;
//# sourceMappingURL=floor1.js.map