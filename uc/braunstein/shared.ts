import { Hallway } from "room-finder";

export const COVID_ONE_WAY_HALLWAY_AND_STAIRS = false;

export type StairNodeId =
  | "stair 198a"
  | "stair 198b"
  | "elevator 197a"

export type ConnectionNodeId =
  | "140 to 140a"
  

export type UCHallway = Hallway<ConnectionNodeId, StairNodeId>;