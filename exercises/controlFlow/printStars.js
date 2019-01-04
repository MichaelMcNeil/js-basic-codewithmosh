showStars(5);

function showStars(rows) {
  for (let i = 1; i <= 5; i++) console.log(Array(i + 1).join('*'));
}