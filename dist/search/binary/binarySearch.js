"use strict";
exports.__esModule = true;
var common_1 = require("../common");
var binarySearch = function (items, item) {
  var result = null;
  var startPoint = 0;
  var endPoint = items.length - 1;
  while (result == null) {
    var midPoint = ~~((startPoint + endPoint) / 2);
    var att = items[midPoint];
    if (item === att) {
      result = midPoint;
    } else if (startPoint == endPoint) {
      result = common_1.NO_MATCH;
    } else if (item < att) {
      if (midPoint == 0) result = common_1.NO_MATCH;
      endPoint = midPoint - 1;
    } else if (item > att) {
      if (midPoint == items.length - 1) result = common_1.NO_MATCH;
      startPoint = midPoint + 1;
    }
  }
  return result;
};
exports["default"] = binarySearch;
