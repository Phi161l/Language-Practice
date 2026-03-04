/**
 * EXPERIMENT 9: PROTOTYPES & INHERITANCE
 *
 * Concepts:
 * - Objects
 * - [[Prototype]] / __proto__
 * - Constructor functions
 * - new keyword
 * - Prototype chain
 * - ES6 classes
 *
 * Rule:
 * Inspect objects using console.dir()
 */

console.log("========== 1. BASIC OBJECT PROTOTYPE ==========");

const obj = { name: "Prototype" };

console.log(obj.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null

/*
All objects inherit from Object.prototype
Unless created differently.
*/


console.log("\n========== 2. CONSTRUCTOR FUNCTION ==========");

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, my name is", this.name);
};

const p1 = new Person("Alice");

p1.sayHello();

/*
What does 'new' do?

1. Creates empty object
2. Sets its prototype to Person.prototype
3. Binds 'this' to new object
4. Returns the object
*/

console.log(p1.__proto__ === Person.prototype); // true


console.log("\n========== 3. MANUAL PROTOTYPE LINKING ==========");

const animal = {
  speak() {
    console.log("Animal speaks");
  }
};

const dog = Object.create(animal);
dog.bark = function () {
  console.log("Woof");
};

dog.speak(); // inherited
dog.bark();

console.log(dog.__proto__ === animal); // true


console.log("\n========== 4. PROTOTYPE CHAIN LOOKUP ==========");

const grandParent = {
  greet() {
    console.log("Hello from grandparent");
  }
};

const parent = Object.create(grandParent);
const child = Object.create(parent);

child.greet();

/*
Lookup order:
child → parent → grandParent → Object.prototype → null
*/


console.log("\n========== 5. ES6 CLASS SYNTAX ==========");

class Vehicle {
  constructor(type) {
    this.type = type;
  }

  describe() {
    console.log("This is a", this.type);
  }
}

class Car extends Vehicle {
  constructor(type, brand) {
    super(type);
    this.brand = brand;
  }

  info() {
    console.log(this.brand, this.type);
  }
}

const myCar = new Car("Car", "Toyota");

myCar.describe();
myCar.info();

/*
Under the hood:
Classes are prototype-based.
*/


console.log("\n========== 6. CLASS VS PROTOTYPE COMPARISON ==========");

console.log(typeof Vehicle); // function

console.log(
  Vehicle.prototype.describe ===
  Object.getPrototypeOf(myCar).describe
); // true


console.log("\n========== 7. INSTANCE VS PROTOTYPE METHODS ==========");

function User(name) {
  this.name = name;

  // Instance method (bad for memory)
  this.sayHi = function () {
    console.log("Hi from", this.name);
  };
}

User.prototype.sayBye = function () {
  console.log("Bye from", this.name);
};

const u1 = new User("John");
const u2 = new User("Jane");

console.log(u1.sayHi === u2.sayHi);   // false
console.log(u1.sayBye === u2.sayBye); // true

/*
Prototype methods are shared.
Instance methods are duplicated.
*/


console.log("\n========== END OF EXPERIMENT ==========");