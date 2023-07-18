import { Hallway } from "room-finder";

export const COVID_ONE_WAY_HALLWAY_AND_STAIRS = false;

export type StairNodeId =
  | "stair 198a"
  | "stair 198b"

export type ConnectionNodeId =
  | "1108 & 1105 to 1100s"
  | "1300s to 1600s"

export type UCHallway = Hallway<ConnectionNodeId, StairNodeId>;