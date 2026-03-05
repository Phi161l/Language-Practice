// const obj = { name: "Prototype" };

// console.log(obj.__proto__ === Object.prototype); // true
// console.log(Object.prototype.__proto__); // null


// console.log(Object.create);


// const animal = {
//   speak() {
//     console.log("Animal speaks");
//   }
// };

// const dog = {}

// dog.speak = function () {
//   console.log("Dog barks");
// };

// dog.speak();


// const a = {};
// console.log(Object.getPrototypeOf(a));
// console.log(a.toString());



// const b = Object.create(null);
// console.log(Object.getPrototypeOf(b));
// console.log(b.toString());      // error



// const obj = { name: "Prototype" };

// console.log(obj.__proto__ === Object.prototype); // true
// console.log(Object.prototype.__proto__); // null


function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, my name is", this.name);
};

const p1 = new Person("Alice");

p1.sayHello();


