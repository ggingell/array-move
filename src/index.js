"use strict";

function move(collection, fromIndex, toIndex) {
  var result = [];
  var shift = toIndex - fromIndex > 0 ? 1 : -1;
  var start = toIndex < fromIndex ? toIndex : fromIndex;
  var end = start < toIndex ? toIndex : fromIndex;

  for (var index = 0; index < collection.length; index++) {
    var offset = index >= start && index <= end ? shift : 0;
    result.push(collection[index + offset]);
  }

  result[toIndex] = collection[fromIndex];

  return result;
}

module.exports = move;
