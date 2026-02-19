/**
 * EXPERIMENT 6: ASYNC & EVENT LOOP
 *
 * Concepts:
 * - Call stack
 * - Synchronous vs asynchronous
 * - setTimeout (macrotask)
 * - Promises (microtask)
 * - async/await
 *
 * Rule:
 * DO NOT run immediately.
 * Predict the order first.
 */

console.log("========== 1. BASIC ORDER ==========");

console.log("A");

setTimeout(() => {
  console.log("B (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("C (promise)");
});

console.log("D");


/*
Question:
What is the order?
Why?
*/


console.log("\n========== 2. NESTED ASYNC ==========");

setTimeout(() => {
  console.log("E (timeout 1)");

  Promise.resolve().then(() => {
    console.log("F (promise inside timeout)");
  });

}, 0);

Promise.resolve().then(() => {
  console.log("G (outer promise)");
});

console.log("H");


/*
Trace carefully:
Stack → Microtask → Macrotask
*/


console.log("\n========== 3. ASYNC / AWAIT ==========");

async function asyncTest() {
  console.log("I (inside async start)");

  await Promise.resolve();

  console.log("J (after await)");
}

console.log("K (before async call)");

asyncTest();

console.log("L (after async call)");


/*
Important:
await pauses the async function,
but does NOT block the main thread.
*/


console.log("\n========== 4. MICROTASK PRIORITY ==========");

setTimeout(() => console.log("M (timeout)"), 0);

Promise.resolve().then(() => console.log("N (promise 1)"));

Promise.resolve().then(() => {
  console.log("O (promise 2)");
  Promise.resolve().then(() => console.log("P (nested promise)"));
});

console.log("Q");


/*
Microtasks always finish before macrotasks.
Even nested ones.
*/


console.log("\n========== END OF EXPERIMENT ==========");