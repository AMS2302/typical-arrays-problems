
exports.min = function min (array) {
  if (Array.isArray(array) && array.length > 0) {
  return Math.min(...array); 
  }
  else {return 0}
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length > 0) {
    return Math.max(...array);
  }
  else {return 0}
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length > 0) {
  let i;
  let x = 0;
  for (i = 0; i < array.length; i++) {
    x = x + array[i]
  }
  return (x / array.length);}
  else {return 0}
}
