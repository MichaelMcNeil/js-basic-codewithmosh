let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

function Address(street, city, zip) {
  this.street = street;
  this.city = city;
  this.zip = zip;
}

// Checks for object equality
function areEqual(address1, address2) {
  return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zip === address2.zip;
}

// Checks for reference to the same object
function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));