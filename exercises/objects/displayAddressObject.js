const address = {
  street: '11 Runner Dr',
  city: 'Paducah',
  state: 'KY'
}

function showAddress(address) {
  for (let key in address)
    console.log(key, address[key]);
}

showAddress(address);