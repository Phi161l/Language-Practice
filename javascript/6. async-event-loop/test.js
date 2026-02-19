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





// async function asyncTest() {
//   console.log("I (inside async start)");

//   await Promise.resolve();

//   console.log("J (after await)");
// }

// console.log("K (before async call)");

// asyncTest();

// console.log("L (after async call)");





// setTimeout(() => console.log("M (timeout)"), 0);

// Promise.resolve().then(() => console.log("N (promise 1)"));

// Promise.resolve().then(() => {
//   console.log("O (promise 2)");
//   Promise.resolve().then(() => console.log("P (nested promise)"));
// });

// console.log("Q");






// SYNC + TIMEOUT + PROMISE
// console.log("L1 (sync)");

// setTimeout(() => {
//   console.log("L2 (timeout 1)");

//   Promise.resolve().then(() => {
//     console.log("L3 (promise inside timeout 1)");
//   });

//   setTimeout(() => {
//     console.log("L4 (nested timeout)");
//   }, 0);

// }, 0);

// Promise.resolve().then(() => {
//   console.log("L5 (promise 1)");
// }).then(() => {
//   console.log("L6 (chained promise 2)");
// });

// console.log("L7 (sync end)");



// // l1, l7, l5, l6, l2, l3, l4








// async function hardAsync() {
//   console.log("A1 (async start)");

//   await Promise.resolve();
//   console.log("A2 (after await)");

//   setTimeout(() => {
//     console.log("A3 (timeout inside async)");
//   }, 0);

//   await Promise.resolve();
//   console.log("A4 (second await done)");
// }

// await hardAsync();
// console.log("A5 (after async call)");


// a5, a1, a2, a4, a3




Promise.resolve().then(() => {
  console.log("P1 (outer promise)");

  Promise.resolve().then(() => {
    console.log("P2 (nested promise inside outer)");
  });

  setTimeout(() => {
    console.log("P3 (timeout inside outer promise)");
  }, 0);

});

console.log("END OF HARD PRACTICE");
