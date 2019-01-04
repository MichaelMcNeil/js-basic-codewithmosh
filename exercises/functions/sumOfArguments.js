console.log(sum([1, 2, 3, 4]));

function sum(...args) {
  if (Array.isArray(args[0])) args = [...args[0]];

  return args.reduce((a, b) => a + b);
}
