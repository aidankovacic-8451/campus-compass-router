import {
    Building,
    Hallway,
    Room,
    Direction,
    Turn,
    assertValidBuilding,
    onFloor,
    Stairs,
    Fork,
    reverseConnection
  } from "room-finder";

  const { LEFT, RIGHT, FRONT } = Direction;
  type MyStairs = "stair-a" | "stair-b" | "elevator-a";
  
  const all = new Building([
    new Hallway([
        new Stairs(LEFT, onFloor("stair-a", 1)),
        new Room("111"),
        new Room("112"),
        new Stairs(LEFT, onFloor("elevator-a", 1), "the elevator"),
      ]),

      // hallway 21 (on 2nd floor)
      new Hallway([
        new Stairs(LEFT, onFloor("stair-a", 2)),
        new Room("211"),
        new Room("212"),
        new Fork(RIGHT, reverseConnection("fork1"), "the 22s"),
        new Stairs(LEFT, onFloor("elevator-a", 2), "the elevator"),
      ]),

      // hallway 22 (on 2nd floor)
      new Hallway([
        new Room("221"),
        new Room("222"),
        new Stairs(LEFT, onFloor("stair-b", 2)),
        new Fork(FRONT, "fork1", "the 21s"),
      ]),

      // hallway 31 (on 3rd floor)
      new Hallway([
        new Room("311", RIGHT),
        new Stairs(LEFT, onFloor("stair-a", 3)),
        new Room("312"),
        new Stairs(LEFT, onFloor("elevator-a", 3), "the elevator"),
      ]),

      // hallway 32 (on 3rd floor)
      new Hallway([
        new Room("321"),
        new Stairs(LEFT, onFloor("stair-b", 3)),
        new Room("322"),
      ]),
  ]);

  assertValidBuilding(all);

  const accessible = all.withAllowedConnectionTypes(
    s => !s.includes("stair")
  );

export = { testBuilding: all, accessible };
