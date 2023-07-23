"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessible = exports.all = void 0;
var room_finder_1 = require("room-finder");
var hallways_1 = require("./hallways");
exports.all = new room_finder_1.Building(hallways_1.default);
exports.accessible = exports.all.withAllowedConnectionTypes(function (s) { return !s.includes("stair"); });
//# sourceMappingURL=index.js.map