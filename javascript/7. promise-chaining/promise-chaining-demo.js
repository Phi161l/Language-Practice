/**
 * EXPERIMENT 7: PROMISE CHAINING & ERROR HANDLING
 *
 * Concepts:
 * - Promise chaining
 * - Returning values
 * - Returning promises
 * - Throwing errors
 * - .catch()
 * - .finally()
 * - Converting to async/await
 *
 * Rule:
 * DO NOT run immediately.
 * Predict the flow first.
 */

console.log("========== 1. BASIC CHAIN ==========");

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

Promise.resolve(5)
  .then(step1)
  .then(step2)
  .then(step3)
  .then(result => {
    console.log("Final Result:", result);
  });

/*
Question:
What is printed?
In what order?
Why does returning a Promise still continue the chain?
*/


console.log("\n========== 2. THROWING ERRORS ==========");

Promise.resolve(10)
  .then(value => {
    console.log("Start:", value);
    throw new Error("Something went wrong");
  })
  .then(value => {
    console.log("This will NOT run:", value);
  })
  .catch(error => {
    console.log("Caught Error:", error.message);
    return 100;
  })
  .then(value => {
    console.log("After Catch:", value);
  });

/*
Important:
Throwing inside .then() is like returning a rejected Promise.
*/


console.log("\n========== 3. RETURNING A REJECTED PROMISE ==========");

function riskyStep(value) {
  console.log("Risky step:", value);
  return Promise.reject("Manual rejection");
}

Promise.resolve(20)
  .then(riskyStep)
  .then(value => {
    console.log("Won’t run:", value);
  })
  .catch(error => {
    console.log("Caught rejection:", error);
  });


/*
Compare:
throw new Error()
vs
return Promise.reject()
*/


console.log("\n========== 4. FINALLY ==========");

Promise.resolve("Clean")
  .then(value => {
    console.log("Value:", value);
    return value;
  })
  .finally(() => {
    console.log("Finally always runs");
  })
  .then(value => {
    console.log("After finally:", value);
  });

/*
Important:
finally does NOT receive the resolved value.
It passes it through unchanged.
*/


console.log("\n========== 5. CONVERT TO ASYNC/AWAIT ==========");

async function asyncFlow() {
  try {
    const a = await Promise.resolve(2);
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


console.log("\n========== END OF EXPERIMENT ==========");
