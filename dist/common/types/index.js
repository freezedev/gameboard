"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
"use strict";

var Color = _interopRequire(require("./color"));

var Vector2 = _interopRequire(require("./vector2"));

var Vector3 = _interopRequire(require("./vector3"));

var Rect = _interopRequire(require("./rect"));

var Types = {};

Types.Color = Color;
Types.Vector2 = Vector2;
Types.Vector3 = Vector3;
Types.Rect = Rect;

exports["default"] = Types;
exports.Color = Color;
exports.Vector2 = Vector2;
exports.Vector3 = Vector3;
exports.Rect = Rect;