"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var floor1_1 = require("./floor1");
var floor2_1 = require("./floor2");
var floor3_1 = require("./floor3");
var hallways = __spreadArray(__spreadArray(__spreadArray([], floor1_1.default, true), floor2_1.default, true), floor3_1.default, true);
exports.default = hallways;
//# sourceMappingURL=index.js.map