/**
 * EXPERIMENT 5: FUNCTION COMPOSITION & FUNCTIONAL PATTERNS
 *
 * Concepts:
 * - Pure vs impure functions
 * - Higher-order functions
 * - Function composition
 * - Currying
 */

console.log("========== 1. PURE vs IMPURE ==========");

let total = 0;

// Impure function (depends on outer state)
function addToTotal(value) {
  total += value;
  return total;
}

console.log(addToTotal(5)); // ?
console.log(addToTotal(5)); // ?

// Pure function (no side effects)
function add(a, b) {
  return a + b;
}

console.log(add(5, 5)); // ?
console.log(add(5, 5)); // ?

// 👉 Why is the first one impure?


console.log("\n========== 2. HIGHER-ORDER FUNCTION ==========");

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // ?
console.log(triple(5)); // ?

// 👉 multiplyBy returns a function (closure)


console.log("\n========== 3. FUNCTION COMPOSITION ==========");

function increment(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

// Compose manually
const result1 = square(increment(2));
console.log(result1); // ?

// Generic compose function
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const squareAfterIncrement = compose(square, increment);
console.log(squareAfterIncrement(2)); // ?

// 👉 What order do functions run in compose?


console.log("\n========== 4. CURRYING ==========");

// Normal function
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3)); // ?

// Curried version
function curriedMultiply(a) {
  return function (b) {
    return a * b;
  };
}

const multiplyBy10 = curriedMultiply(10);
console.log(multiplyBy10(5)); // ?

// 👉 Why is this powerful?


console.log("\n========== 5. FUNCTION COMPOSITION PIPELINE ==========");

const add2 = x => x + 2;
const multiply3 = x => x * 3;
const subtract1 = x => x - 1;

function pipe(...functions) {
  return function (value) {
    return functions.reduce((acc, fn) => fn(acc), value);
  };
}

const pipeline = pipe(add2, multiply3, subtract1);

console.log(pipeline(5)); // ?

// 👉 Trace the execution step by step.


console.log("\n========== END OF EXPERIMENT ==========");
