// function step1(value) {
//   console.log("step 1:", value);
//   return value + 1;
// }

// function step2(value) {
//   console.log("step2:", value);
//   return Promise.resolve(value * 2);
// }

// function step3(value) {
//   console.log("step 3", value);
//   return value - 3;
// }

// Promise.resolve(5)
//   .then(step1)
//   .then(step2)
//   .then(step3)
//   .then((res) => {
//     console.log("final result:", res);
//   });

// console.log(Promise.resolve(5));
// console.log(global.Promise)

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 1000);
// })

// console.log(p); // Promise { <pending> }

// p.then(value => console.log("Resolved:", value));



// Promise.resolve(10)
//   .then((v) => {
//     console.log("start", v);
//   })
//   .then((v) => {
//     console.log("this wont run", v);
//   })
//   .catch((err) => {
//     console.log("caought error", err);
//   })
//   .then((v) => {
//     console.log("after catch", v);
//   });

// console.log("syn")



// function riskyStep(v) {
//   console.log("risky:", v);
//   return Promise.reject("manual rejection");
// }

// Promise.resolve(20)
//   .then(riskyStep)
//   .then((v) => {
//     console.log("wont run", v);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });






// Promise.resolve("Clean")
//   .then(value => {
//     console.log("Value:", value);
//     return value;
//   })
//   .finally(() => {
//     console.log("Finally always runs");
//   })
//   .then(value => {
//     console.log("After finally:", value);
//   });






function step1(value) {
  console.log("Step 1:", value);
  return value + 1;
}

function step2(value) {
  console.log("Step 2:", value);
  return Promise.resolve(value * 2);
}

function step3(value) {
  console.log("Step 3:", value);
  return value - 3;
}



async function asyncFlow() {
  try {
    const a = await Promise.resolve(5);
    console.log("A:", a);

    const b = await step1(a);
    const c = await step2(b);
    const d = await step3(c);

    console.log("Async Final:", d);

  } catch (err) {
    console.log("Async Caught:", err.message);
  } finally {
    console.log("Async Finally");
  }
}

asyncFlow();
