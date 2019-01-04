const numbers = [1, 2, 3, 4];

console.log(numbers.includes(0));

function includes(array, searchElement) {
  for (let value of array) {
    if (value === searchElement) return true;
  }

  return false;
}
