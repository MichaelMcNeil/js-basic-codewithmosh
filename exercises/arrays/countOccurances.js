const numbers = [1, 2, 3, 4, 1];

const count = countOccurrances(numbers, -1);

console.log(count);

function countOccurrances(array, searchElement) {
  return array.reduce((accumulator, current) => {
    return accumulator + (current === searchElement ? 1 : 0);
  }, 0);
}
