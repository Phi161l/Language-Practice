const obj = { name: "Prototype" };

console.log(obj.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null
