/**
 * EXPERIMENT 1: TYPE COERCION & DATA BEHAVIOR
 *
 * Goal:
 * - Understand primitive vs reference types
 * - Understand == vs ===
 * - Understand truthy / falsy values
 *
 * Rule:
 * - Predict output BEFORE running
 * - Then run: node type-coercion-playground.js
 * - Write your explanation in comments
 */

console.log("========== 1. PRIMITIVE vs REFERENCE ==========");

// Primitive values (copied by VALUE)
let a = 10;
let b = a;

b = 20;

console.log("a:", a); // expect?
console.log("b:", b); // expect?

// 👉 Explanation:
// a and b are primitives, so b gets a COPY of a's value


// Reference values (copied by REFERENCE)
let obj1 = { value: 10 };
let obj2 = obj1;

obj2.value = 20;

console.log("obj1.value:", obj1.value); // expect?
console.log("obj2.value:", obj2.value); // expect?

// 👉 Explanation:
// obj1 and obj2 point to the SAME object in memory


console.log("\n========== 2. TYPE COERCION (== vs ===) ==========");

console.log(5 == "5");        // ?
console.log(5 === "5");       // ?

console.log(true == 1);       // ?
console.log(false == 0);      // ?

console.log(null == undefined);   // ?
console.log(null === undefined);  // ?

// 👉 Explanation:
// == allows type coercion
// === requires same type AND same value


console.log("\n========== 3. TRUTHY & FALSY ==========");

if ("") {
  console.log("Empty string is truthy");
} else {
  console.log("Empty string is falsy");
}

if ("0") {
  console.log('"0" is truthy');
} else {
  console.log('"0" is falsy');
}

if ([]) {
  console.log("Empty array is truthy");
} else {
  console.log("Empty array is falsy");
}

// 👉 Explanation:
// Only these are falsy:
// false, 0, -0, "", null, undefined, NaN


console.log("\n========== 4. WEIRD COERCION CASES ==========");

console.log([] == false);     // ?
console.log([] === false);    // ?

console.log([] == "");        // ?
console.log({} == "[object Object]"); // ?

// 👉 Explanation:
// JS tries to convert objects to primitives using:
// valueOf() → toString()


console.log("\n========== 5. REFERENCE TRAP ==========");

let arr1 = [];
let arr2 = [];

console.log(arr1 == arr2);    // ?
console.log(arr1 === arr2);   // ?

// 👉 Explanation:
// Two different objects → different memory locations



console.log("\n========== 6. OBJECT → PRIMITIVE COERCION ==========");

const obj = {
  valueOf() {
    console.log("valueOf called");
    return 10;
  },
  toString() {
    console.log("toString called");
    return "20";
  }
};

console.log(obj + 1);      // ?
console.log(String(obj)); // ?
console.log(obj == 10);   // ?
console.log(obj == "20"); // ?


console.log("\n========== END OF EXPERIMENT ==========");
