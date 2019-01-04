const numbers = [1, 2, 3, 4, 1];

try {
  const count = countOccurences(numbers, 1);
  console.log(count);
} catch (ex) {
  console.log(ex.message);
}

function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Please use a valid array");

  return array.reduce((accumulator, current) => {
    return current === searchElement ? accumulator + 1 : accumulator;
  }, 0);
}
