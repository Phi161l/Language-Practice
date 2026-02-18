// console.log("A");

// setTimeout(() => {
//   console.log("B (setTimeout)");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C (promise)");
// });

// console.log("D");






// setTimeout(() => {
//   console.log("E (timeout 1)");

//   Promise.resolve().then(() => {
//     console.log("F (promise inside timeout)");
//   });

// }, 0);

// Promise.resolve().then(() => {
//   console.log("G (outer promise)");
// });

// console.log("H");





async function asyncTest() {
  console.log("I (inside async start)");

  await Promise.resolve();

  console.log("J (after await)");
}

console.log("K (before async call)");

asyncTest();

console.log("L (after async call)");
