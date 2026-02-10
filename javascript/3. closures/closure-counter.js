/**
 * EXPERIMENT 3: CLOSURES & LEXICAL SCOPING
 *
 * Concepts:
 * - Closures
 * - Lexical scope
 * - Encapsulation (without classes)
 *
 * Goal:
 * Create a counter that remembers its value
 * without using global variables.
 */

console.log("========== 1. BASIC CLOSURE ==========");

function createCounter() {
  let count = 0; // private variable

  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // ?
console.log(counter1()); // ?
console.log(counter1()); // ?


console.log("\n========== 2. MULTIPLE INSTANCES ==========");

const counter2 = createCounter();

console.log(counter2()); // ?
console.log(counter2()); // ?

console.log(counter1()); // ?


// 👉 Each call to createCounter creates a NEW closure


console.log("\n========== 3. CLOSURE IS NOT A SNAPSHOT ==========");

function makePrinter() {
  let msg = "Hello";

  return function () {
    console.log(msg);
  };
}

const printMsg = makePrinter();
printMsg(); // ?

// Change AFTER closure creation
// (still affects the closure)
msg = "Changed"; // intentional mistake
printMsg(); // ?

// 👉 Why does this not change msg?


console.log("\n========== 4. CLOSURE WITH PARAMETERS ==========");

function createStepCounter(step) {
  let count = 0;

  return function () {
    count += step;
    return count;
  };
}

const stepCounter = createStepCounter(5);

console.log(stepCounter()); // ?
console.log(stepCounter()); // ?
console.log(stepCounter()); // ?


console.log("\n========== 5. ENCAPSULATION PATTERN ==========");

function createSecret() {
  let secret = "JS is weird";

  return {
    getSecret() {
      return secret;
    },
    setSecret(newSecret) {
      secret = newSecret;
    }
  };
}

const vault = createSecret();

console.log(vault.getSecret()); // ?
vault.setSecret("Closures are powerful");
console.log(vault.getSecret()); // ?

// console.log(vault.secret); // ? why undefined?


console.log("\n========== END OF EXPERIMENT ==========");
