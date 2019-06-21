var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

function chunk(arr, size) {
  var len = arr.length;
  if (!len) {
    return [];
  }
  if (size > len) {
    size = len;
  }
  let chunkArr = [];
  var chunkIndex = 0;
  arr.forEach((item, index) => {
    
    if (!chunkArr[chunkIndex]) {
      chunkArr[chunkIndex] = [];
    }
    chunkArr[chunkIndex].push(item);
    if ((index + 1) % size === 0) {
      chunkIndex += 1;
    }
  });
  return chunkArr;
}

let a = chunk(arr, 2);
console.log(a);
