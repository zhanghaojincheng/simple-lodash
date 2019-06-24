var arr = [0, 1, false, 2, "", 3, null];

function compact(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.filter(item => item);
}

console.log(compact(arr));

// 参数
// array (Array): 待处理的数组
// 返回值
// (Array): 返回过滤掉假值的新数组。

/**lodash写法 */
function compact(array) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
