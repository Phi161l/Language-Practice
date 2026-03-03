// function createLargeObject() {
//   return new Array(1_000_000).fill("🚀");
// }

// let data = createLargeObject();
// console.log("Large object created");
// console.log(data)

// // Remove reference
// data = null;

// console.log("Reference removed");





// function leakyClosure() {
//   const hugeArray = new Array(1_000_000).fill("🔥");

//   return function () {
//     console.log("Closure still has access to hugeArray:", hugeArray.length);
//   };
// }

// const closure = leakyClosure();

// // Even if we don't use hugeArray directly,
// // it stays in memory because closure references it.

// closure();

// /*
// Important:
// If closure exists → hugeArray exists.
// */






// function accidentalGlobal() {
//   // Forgot let/const
//   leakedVar = new Array(1_000_000).fill("❌");
//   console.log(leakedVar)
// }

// accidentalGlobal();

// console.log("Accidental global created");




// function simulateListenerLeak() {
//   const bigData = new Array(1_000_000).fill("📦");

//   function listener() {
//     console.log("Listener active:", bigData.length);
//   }

//   // Simulating attaching listener
//   global.fakeListener = listener;
// }

// simulateListenerLeak();

// console.log(global.fakeListener)
// console.log("Listener stored globally");






// function cleanableFactory() {
//   let largeData = new Array(1_000_000).fill("🧠");

//   return {
//     use() {
//       console.log("Using data:", largeData.length);
//     },
//     cleanup() {
//       console.log("Cleaning up memory...");
//       largeData = null;
//     }
//   };
// }


// const instance = cleanableFactory();
// instance.use();
// instance.cleanup();
// instance.use()



if (global.gc) {
  console.log("Forcing garbage collection...");
  global.gc();
  console.log("GC triggered");
} else {
  console.log("GC not exposed. Run with --expose-gc");
}