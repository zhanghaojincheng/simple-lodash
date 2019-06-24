function concat(array) {
  let args = Array.prototype.slice.apply(arguments);
  args.shift();
  args.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(innerItem => {
        array.push(innerItem);
      });
    } else {
      array.push(item);
    }
  });
  return array;
}

var array = [1];
var other = concat(array, 2, [3], [[4]]);

console.log(other);

/**lodash */
function concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1),
    array = arguments[0],
    index = length;

  while (index--) {
    args[index - 1] = arguments[index];
  }
  return arrayPush(
    isArray(array) ? copyArray(array) : [array],
    baseFlatten(args, 1)
  );
}
