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
      new Room("401", LEFT),
      new Room("402", RIGHT),
      new Room("409", LEFT),
      new Room("406", RIGHT),
      new Room("415", LEFT),
      new Room("416", RIGHT),
      new Room("421", LEFT),
      new Room("422", RIGHT),
      new Room("425", LEFT),
      new Room("426", RIGHT),
      new Room("430", RIGHT), 
      new Turn(Direction.LEFT),
      new Stairs(LEFT, onFloor("stair 198b", 1)),
    ])
  ];
  export default hallways; 