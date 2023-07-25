"use strict";
/* eslint-disable default-case */
Object.defineProperty(exports, "__esModule", { value: true });
var room_finder_1 = require("room-finder");
var LEFT = room_finder_1.Direction.LEFT, RIGHT = room_finder_1.Direction.RIGHT, FRONT = room_finder_1.Direction.FRONT;
var hallways = [
    // 
    new room_finder_1.Hallway([
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("stair 198a", 3)),
        new room_finder_1.Room("301", LEFT),
        new room_finder_1.Room("300", RIGHT),
        new room_finder_1.Room("302", RIGHT),
        new room_finder_1.Room("303", LEFT),
        new room_finder_1.Room("309", LEFT),
        new room_finder_1.Room("312", RIGHT),
        new room_finder_1.Room("316", RIGHT),
        new room_finder_1.Room("315", LEFT),
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("elevator 197a", 3), "the elevator"),
        new room_finder_1.Room("324", RIGHT),
        new room_finder_1.Room("326", RIGHT),
        new room_finder_1.Room("325", LEFT),
        new room_finder_1.Stairs(LEFT, (0, room_finder_1.onFloor)("stair 198b", 3)),
        new room_finder_1.Room("330", RIGHT),
        new room_finder_1.Room("332", RIGHT),
        new room_finder_1.Room("334", RIGHT),
        new room_finder_1.Room("336", RIGHT),
        new room_finder_1.Room("345", LEFT),
        new room_finder_1.Room("338", RIGHT),
        new room_finder_1.Turn(room_finder_1.Direction.LEFT),
        new room_finder_1.Room("346", RIGHT),
    ])
];
exports.default = hallways;
//# sourceMappingURL=floor3.js.map