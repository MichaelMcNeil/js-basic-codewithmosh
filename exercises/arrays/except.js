const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 3]);

console.log(output);

function except(array, excludes) {
  for (let excluded of excludes)
    while (array.find(value => value === excluded))
      array = array.filter(element => element !== excluded);

  return array;
}

console.log(numbers);
