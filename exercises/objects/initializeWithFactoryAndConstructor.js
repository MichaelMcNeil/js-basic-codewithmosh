// Factory
function createAddress(street, city, zip) {
  return {
    street,
    city,
    zip
  };
}

// Constructor
function Address(street, city, zip) {
  this.street = street;
  this.city = city;
  this.zip = zip;
}

let address = createAddress('a', 'b', 'c');
let another = new Address('a', 'b', 'c');
console.log(address);
console.log(another);