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
      new Stairs(LEFT, onFloor("stair 198a", 2)),
      new Room("201", LEFT),
      new Room("202", RIGHT),
      new Room("204", RIGHT),
      new Room("206", RIGHT),
      new Room("208", RIGHT),
      new Room("207", LEFT),
      new Room("210", RIGHT),
      new Room("209", LEFT),
      new Room("212", RIGHT),
      new Room("211", LEFT),
      new Room("220", RIGHT),
      new Room("215", LEFT),
      new Room("219", LEFT),
      new Stairs(LEFT, onFloor("elevator 197a", 2), "the elevator"),
      new Room("223", LEFT),
      new Room("225", LEFT),
      new Room("227", LEFT),
      new Room("229", LEFT),
      new Room("226", LEFT),
      new Room("230", LEFT),
      new Room("240", FRONT),
      new Turn(Direction.LEFT),
      new Stairs(LEFT, onFloor("stair 198b", 2)),
    ])
  ];
  export default hallways;