// var x = 10;

// function testScope() {
//   var x = 20;
//   console.log("inside function:", x); // ?
// }

// testScope();
// console.log("outside function:", x); // ?


// console.log(a); // ?
// var a = 10;
// console.log(a); // ?


// try {
//   console.log(b); // ?
// } catch (e) {
//   console.log("error:", e.message);
// }

// let b = 20;
// console.log(b);






// if (true) {
//   var c = 30;
//   let d = 40;
//   const e = 50;
// }

// console.log(c); // ?
// try {
//   console.log(d); // ?
// } catch (e) {
//   console.log("error:", e.message);
// }

// try {
//   console.log(e); // ?
// } catch (e) {
//   console.log("error:", e.message);
// }







// sayHello(); // ?

// function sayHello() {
//   console.log("Hello from function declaration");
// }

// try {
//   sayHi(); // ?
// } catch (e) {
//   console.log("error:", e.message);
// }

// console.log(sayHi)

// var sayHi = function () {
//   console.log("Hello from function expression");
// };



if (true) {
  try {
    console.log(msg); // ?
  } catch (e) {
    console.log("error:", e.message);
  }

  let msg = "Hello TDZ";
  console.log(msg);
}
