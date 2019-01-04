const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 }
];

// Get all movies in 2018 with rating greater than 4
//  Sort them by their rating
// Descending Order
// Pick their title

const result = movies
  .filter(m => m.year === 2018 && m.rating > 4)
  .sort((a, b) => b.rating - a.rating)
  .map(m => m.title);

console.log(result);
