import { Building } from "room-finder";
import {
  ConnectionNodeId,
  StairNodeId,
} from "./shared";
import hallways from "./hallways";

export const all = new Building<ConnectionNodeId, StairNodeId>(hallways);

export const accessible = all.withAllowedConnectionTypes(
  s => !s.includes("stair")
);