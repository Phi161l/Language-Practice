//// 1. basic closure
// function createCounter() {
//   let count = 0; // private variable

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter1 = createCounter();
// console.log(counter1()); // ?
// console.log(counter1()); // ?
// console.log(counter1()); // ?


// //  MULTIPLE INSTANCES
 
// const counter2 = createCounter();

// console.log(counter2()); // ?
// console.log(counter2()); // ?

// console.log(counter1()); // ?
// console.log(counter2())



//// 2. CLOSURE IS NOT A SNAPSHOT 
// function makePrinter() {
//   let msg = "Hello";

//   return function () {
//     console.log(msg);
//   };
// }

// const printMsg = makePrinter();
// printMsg(); // ?

// // Change AFTER closure creation
// // (still affects the closure)
// msg = "Changed";        // intentional mistake ,  undefind msg in global scope
// printMsg(); //



//// 3. CLOSURE WITH PARAMETERS
// function createStepCounter(step) {
//   let count = 0;

//   return function () {
//     count += step;
//     return count;
//   };
// }

// const stepCounter = createStepCounter(5);

// console.log(stepCounter()); // ?
// console.log(stepCounter()); // ?
// console.log(stepCounter()); // ?




//// 4. ENCAPSULATION PATTERN
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

console.log(vault.secret); // ? why undefined?


