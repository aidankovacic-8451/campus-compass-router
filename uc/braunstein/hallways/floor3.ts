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
      new Room("301", LEFT),
      new Room("300", RIGHT),
      new Room("302", RIGHT),
      new Room("303", LEFT),
      new Room("309", LEFT),
      new Room("312", RIGHT),
      new Room("316", RIGHT),
      new Room("315", LEFT),
      new Room("324", RIGHT),
      new Room("326", RIGHT),
      new Room("325", LEFT),
      new Room("330", RIGHT),
      new Room("332", RIGHT),
      new Room("334", RIGHT),
      new Room("336", RIGHT),
      new Room("345", LEFT),
      new Room("338", RIGHT),
      new Room("346", FRONT),
      new Turn(Direction.LEFT),
      new Stairs(LEFT, onFloor("stair 198b", 1)),
    ])
  ];
  export default hallways;