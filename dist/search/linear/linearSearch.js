"use strict";
exports.__esModule = true;
var common_1 = require("../common");
var linearSearch = function (items, item) {
  for (var i = 0; i < items.length; i++) {
    if (items[i] == item) {
      return i;
    }
  }
  return common_1.NO_MATCH;
};
exports["default"] = linearSearch;
