/**
 * EXPERIMENT 8: MEMORY LEAKS & GARBAGE COLLECTION
 *
 * Concepts:
 * - Heap memory
 * - Closures retaining memory
 * - Unused references
 * - Simulated memory leaks
 * - Manual cleanup patterns
 *
 * IMPORTANT:
 * If running in Node:
 *    node --expose-gc memory-leak-test.js
 * so we can manually trigger garbage collection.
 *
 * DO NOT just run blindly.
 * Observe memory usage.
 */

console.log("========== 1. BASIC MEMORY ALLOCATION ==========");

function createLargeObject() {
  return new Array(1_000_000).fill("🚀");
}

let data = createLargeObject();
console.log("Large object created");

// Remove reference
data = null;

console.log("Reference removed");

/*
Question:
Is memory freed immediately?
Answer: Not necessarily.
GC runs when it decides to.
*/


console.log("\n========== 2. CLOSURE RETAINING MEMORY ==========");

function leakyClosure() {
  const hugeArray = new Array(1_000_000).fill("🔥");

  return function () {
    console.log("Closure still has access to hugeArray:", hugeArray.length);
  };
}

const closure = leakyClosure();

// Even if we don't use hugeArray directly,
// it stays in memory because closure references it.

closure();

/*
Important:
If closure exists → hugeArray exists.
*/


console.log("\n========== 3. ACCIDENTAL GLOBAL LEAK ==========");

function accidentalGlobal() {
  // Forgot let/const
  leakedVar = new Array(1_000_000).fill("❌");
}

accidentalGlobal();

console.log("Accidental global created");

/*
In non-strict mode,
this becomes a global variable.
That means it stays alive.
*/


console.log("\n========== 4. EVENT LISTENER LEAK SIMULATION ==========");

function simulateListenerLeak() {
  const bigData = new Array(1_000_000).fill("📦");

  function listener() {
    console.log("Listener active:", bigData.length);
  }

  // Simulating attaching listener
  global.fakeListener = listener;
}

simulateListenerLeak();

console.log("Listener stored globally");

/*
If we never remove the listener,
bigData stays in memory.
*/


console.log("\n========== 5. MANUAL CLEANUP PATTERN ==========");

function cleanableFactory() {
  let largeData = new Array(1_000_000).fill("🧠");

  return {
    use() {
      console.log("Using data:", largeData.length);
    },
    cleanup() {
      console.log("Cleaning up memory...");
      largeData = null;
    }
  };
}

const instance = cleanableFactory();
instance.use();
instance.cleanup();

/*
After cleanup(),
largeData reference is removed.
GC can reclaim it.
*/


console.log("\n========== 6. FORCING GC (NODE ONLY) ==========");

if (global.gc) {
  console.log("Forcing garbage collection...");
  global.gc();
  console.log("GC triggered");
} else {
  console.log("GC not exposed. Run with --expose-gc");
}


console.log("\n========== END OF EXPERIMENT ==========");