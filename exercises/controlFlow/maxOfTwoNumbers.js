let a = 13;
let b = 1;

function getMax(a, b) {
  return a > b ? a : b;
}

let max = getMax(a, b);

console.log(`The max of ${a} and ${b} is ${max}`);