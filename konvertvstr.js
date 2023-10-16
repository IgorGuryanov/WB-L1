console.log(JSON.stringify('Hello world!')); // "Hello world!"
console.log(typeof JSON.stringify('Hello world!')); // string
console.log(JSON.stringify({ name: 'John', age: 25, })); // {"name":"John","age":25}
console.log(typeof JSON.stringify({ name: 'John', age: 25, })); // string

function convertToString(value) {
  if (typeof value === 'string') {
    return value;
  }

  return JSON.stringify(value);
}

console.log(convertToString({ name: 'William', age: 58, })); // {"name":"William","age":58}
console.log(typeof convertToString({ name: 'William', age: 58, })); // string
console.log(convertToString(JSON.stringify({ name: 'Sarah', age: 35, }))); // {"name":"Sarah","age":35}
console.log(typeof convertToString(JSON.stringify({ name: 'Sarah', age: 35, }))); // string