// Arithmetic Operators
console.log('\nArithmetic Operators');
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Increment (++)
console.log(x++);
console.log(x);

// Decrement (--)
console.log(--x);


// Assignment Operators
console.log('\nAssignment Operators');
x = 10;
x = x + 5;
x += 5;
console.log(x);

x = x * 3;
x *= 3;
console.log(x)

// Comparison Operators
console.log('\nComparison Operators');
x = 1;

// Relational
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

// Equality
console.log(x === 1);
console.log(x !== 1);

console.log('\nEquality Operators');

// Strict Equality (Type + Value)
console.log(1 === 1);
console.log(1 === '1');

// Lose Equality (Only Value) Converts what is on the right to the value of the first
console.log(1 == 1);
console.log(1 == '1');
console.log(true == '1');

// Ternary Operators
console.log('\nTernary Operators');

// If a customer has more than 100 points they are a gold customer...
// Otherwise they are a silver customer;

let points = 1100;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

// Logical Operators
console.log('\nLogical Operators');

// Logical AND (&&)
// Returns true if both operands are true

// let highIncome = true;
// let goodCreditScore = true;
// let eligbleForLoan = highIncome && goodCreditScore;
// console.log(eligbleForLoan);

// Logical OR ( ||)
// Returns true if one of the operands is TRUE
let highIncome = false;
let goodCreditScore = false;
let eligbleForLoan = highIncome || goodCreditScore;
console.log('Eligible: ', eligbleForLoan);

// NOT (!)
let applicationRefused = !eligbleForLoan;
console.log('Application Refused: ', applicationRefused);

// Logical Operators w/ non booleans
console.log('\nLogical Operators w/ non booleans');

// The result of a logication expression is dependent on the value of the operands.

// Falsy (kind of like boolean false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

// Short-circuiting
let userColor = null;
let defaultColor = 'blue';

let currentColor = userColor || defaultColor;
console.log(currentColor);

// Bitwise Operators
console.log('\nBitwise Operators');

// 1 = 00000001
// 2 = 00000010
// R(OR) = 00000011
// R(AND) = 00000000

// Read, Write, and Execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);

// Operators Precedence
console.log('\nOperator Precedence');

x = 2 + 3 * 4;
console.log(x);