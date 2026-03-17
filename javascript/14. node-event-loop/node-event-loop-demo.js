/**
 * EXPERIMENT 14: NODE EVENT LOOP
 *
 * Concepts:
 * - Node.js event loop phases
 * - process.nextTick
 * - setImmediate
 * - setTimeout
 * - async file I/O
 */

const fs = require("fs");

console.log("========== 1. START ==========");


console.log("\n========== 2. TIMERS ==========");

setTimeout(() => {
  console.log("setTimeout callback");
}, 0);


console.log("\n========== 3. IMMEDIATE ==========");

setImmediate(() => {
  console.log("setImmediate callback");
});


console.log("\n========== 4. PROMISE MICROTASK ==========");

Promise.resolve().then(() => {
  console.log("Promise microtask executed");
});


console.log("\n========== 5. process.nextTick ==========");

process.nextTick(() => {
  console.log("process.nextTick executed");
});


console.log("\n========== 6. FILE SYSTEM (ASYNC I/O) ==========");

fs.readFile("./sample.txt", "utf8", (err, data) => {

  if (err) throw err;

  console.log("File read complete");

});


console.log("\n========== 7. END OF MAIN SCRIPT ==========");