/**
 * EXPERIMENT 2: SCOPE & HOISTING
 *
 * Concepts:
 * - Global scope
 * - Function scope
 * - Block scope
 * - Hoisting
 * - Temporal Dead Zone (TDZ)
 *
 * Rule:
 * - Predict before running
 * - Then run: node scope-hoisting-demo.js
 */

console.log("========== 1. GLOBAL vs FUNCTION SCOPE ==========");

var x = 10;

function testScope() {
  var x = 20;
  console.log("inside function:", x); // ?
}

testScope();
console.log("outside function:", x); // ?


console.log("\n========== 2. VAR HOISTING ==========");

console.log(a); // ?
var a = 10;
console.log(a); // ?

// 👉 var is hoisted and initialized with undefined


console.log("\n========== 3. LET & CONST HOISTING (TDZ) ==========");

try {
  console.log(b); // ?
} catch (e) {
  console.log("error:", e.message);
}

let b = 20;
console.log(b);

// 👉 let/const are hoisted but NOT initialized (TDZ)


console.log("\n========== 4. BLOCK SCOPE ==========");

if (true) {
  var c = 30;
  let d = 40;
  const e = 50;
}

console.log(c); // ?
try {
  console.log(d); // ?
} catch (e) {
  console.log("error:", e.message);
}

try {
  console.log(e); // ?
} catch (e) {
  console.log("error:", e.message);
}


console.log("\n========== 5. FUNCTION DECLARATION vs EXPRESSION ==========");

sayHello(); // ?

function sayHello() {
  console.log("Hello from function declaration");
}

try {
  sayHi(); // ?
} catch (e) {
  console.log("error:", e.message);
}

var sayHi = function () {
  console.log("Hello from function expression");
};


// 👉 Function declarations are fully hoisted
// 👉 Function expressions follow variable hoisting rules


console.log("\n========== 6. TDZ IN BLOCK ==========");

if (true) {
  try {
    console.log(msg); // ?
  } catch (e) {
    console.log("error:", e.message);
  }

  let msg = "Hello TDZ";
  console.log(msg);
}


console.log("\n========== END OF EXPERIMENT ==========");
