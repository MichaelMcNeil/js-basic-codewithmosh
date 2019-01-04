let width = 1920;
let height = 1080;

function isLandscape(width, height) {
  return width > height;
}

console.log(`${width} x ${height} is ${isLandscape(width, height) ? 'landscape' : 'not landscape'}`);