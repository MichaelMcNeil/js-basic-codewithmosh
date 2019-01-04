console.log(showPrimes(200));

function showPrimes(limit) {
  for (let i = 2; i <= limit; i++)
    if (isPrime(i)) console.log(i);
}

function isPrime(num) {
  for (let i = 2, square = Math.sqrt(num); i <= square; i++)
    if (num % i === 0) return false;

  return num !== 1 && num !== 0;
}