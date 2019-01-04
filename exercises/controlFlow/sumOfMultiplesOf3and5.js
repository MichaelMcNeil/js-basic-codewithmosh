console.log(sum(100));

// returns the sum of all numbers divisible by 3 and 5 up to the limit
function sum(limit) {
  let sum = 0;

  for (let i = 1; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}