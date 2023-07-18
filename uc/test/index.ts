import {
    Building,
    Hallway,
    Room,
    Direction,
    Turn,
    assertValidBuilding,
  } from "room-finder";
  
  const testBuilding = new Building([
    new Hallway([
      new Room("102", Direction.RIGHT),
      new Room("103", Direction.LEFT),
      new Room("104", Direction.RIGHT),
      new Room("105", Direction.LEFT),
      // All we have to do is add a Turn in the middle of the Hallway.
      new Turn(Direction.RIGHT),
      new Room("106", Direction.RIGHT),
      new Room("107"),
      new Room("108", Direction.RIGHT),
      new Room("109", Direction.LEFT),
    ]),
  ]);

  assertValidBuilding(testBuilding);

export = testBuilding;