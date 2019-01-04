// If Else
console.log('\nIf and Else');
// Hour
// If hour is between 6am and 12pm: Good Morning!
// If it is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good Evening!

let hour = 20;

if (hour >= 6 && hour < 12)
  console.log('Good Morning!');
else if (hour >= 12 && hour < 18)
  console.log('Good Afternoon!');
else
  console.log('Good Evening!');

// Switch...case
console.log('\nSwitch...case');

let role = 'moderator';

switch (role) {
  case 'guest':
    console.log("Guest User");
    break;

  case 'moderator':
    console.log("Moderator User");
    break;

  default:
    console.log('Unknown Role');
}

// FOR
console.log('\nFOR');

for (let i = 0; i < 5; i++) {
  console.log('Hello World');
}

// While
console.log('\nWhile');
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// Do...While
console.log('\nDo...While');
i = 0;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);


// for-in
console.log('\nfor-in');
const person = {
  name: 'Michael',
  age: 29
};

for (let key in person) {
  console.log(key);
  console.log(person[key]);
}

const colors = ['red', 'green', 'blue'];

for (let index in colors) {
  console.log(index);
}

// for-of
console.log('\nfor-of');

for (let color of colors)
  console.log(color);