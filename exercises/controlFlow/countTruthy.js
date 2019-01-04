console.log(countTruthy(['test', null, NaN, 1, '', 0, {}]));

function countTruthy(array) {

  let count = 0;

  for (let value of array) {
    if (value) count++;
  }

  return count;
}