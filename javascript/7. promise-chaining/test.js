function step1(value) {
  console.log("step 1:", value);
  return value + 1;
}

function step2(value) {
  console.log("step2:", value);
  return Promise.resolve(value * 2);
}

function step3(value) {
  console.log("step 3", value);
  return value - 3;
}

Promise.resolve(5)
  .then(step1)
  .then(step2)
  .then(step3)
  .then((res) => {
    console.log("final result:", res);
  });



// console.log(Promise.resolve(5));
// console.log(global.Promise)


// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 1000);
// })

// console.log(p); // Promise { <pending> }

// p.then(value => console.log("Resolved:", value));
