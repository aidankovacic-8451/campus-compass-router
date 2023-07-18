/* eslint-disable default-case */

import {
  Direction,
  Room,
  Turn,
  Hallway,
  Stairs,
  Fork,
  SimpleHallway,
  onFloor,
  reverseConnection,
} from "room-finder";
import { UCHallway, ConnectionNodeId, StairNodeId } from "../shared";

const { LEFT, RIGHT, FRONT } = Direction;

const hallways: UCHallway[] = [
  // 
  new Hallway([
    new Stairs(LEFT, onFloor("stair 198a", 1)),
    new Room("101", LEFT),
    new Room("100", RIGHT),
    new Room("102", RIGHT),
    new Room("104", RIGHT),
    new Room("105", LEFT),
    new Room("106", RIGHT),
    new Room("108", RIGHT),
    new Room("110", RIGHT),
    new Room("113", LEFT),
    new Room("112", RIGHT),
    new Room("115", LEFT),
    new Room("116", RIGHT),
    new Room("117", LEFT),
    new Room("118", RIGHT),
    new Room("119", LEFT),
    new Room("122", RIGHT),
    new Room("124", RIGHT),
    new Room("125", LEFT),
    new Room("127", LEFT),
    new Room("129", LEFT),
    new Room("130", RIGHT),
    new Room("140", FRONT),
    new Turn(Direction.LEFT),
    new Stairs(LEFT, onFloor("stair 198b", 1)),
  ])
];
export default hallways;