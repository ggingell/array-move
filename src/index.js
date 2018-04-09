'use strict';

function move(collection, fromIndex, toIndex) {
    var result = [];
    var shift = Math.sign(toIndex - fromIndex);
    var start = Math.min(fromIndex, toIndex);
    var end = Math.max(fromIndex, toIndex);

    for (var index = 0; index < collection.length; index++) {
        var offset = index >= start && index <= end ? shift : 0;

        value = collection[index + offset];
        result.push(value);
    }

    result[toIndex] = collection[fromIndex];

    return result;
}

module.exports = move;
