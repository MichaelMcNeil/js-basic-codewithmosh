const movie = {
  title: 'Titanic',
  releaseYear: 2000,
  rating: 4.5,
  director: 'James Cameron'
}

showProperties(movie);

//show all properties where type is string
function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') console.log(key, obj[key]);
  }
}