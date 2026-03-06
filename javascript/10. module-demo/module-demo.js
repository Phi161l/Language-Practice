/**
 * EXPERIMENT 10: MODULE SYSTEM
 *
 * Concepts:
 * - ES modules
 * - Named exports
 * - Default exports
 * - Import syntax
 * - Module isolation
 */

import log from "./logger.js";
import { add, multiply, PI } from "./math-utils.js";

console.log("========== 1. BASIC MODULE IMPORT ==========");

log("Testing math utilities");

console.log("Add:", add(2, 3));
console.log("Multiply:", multiply(3, 4));
console.log("PI:", PI);


/*
Notice:
Functions are imported from another file.
Modules have their own scope.
*/


console.log("\n========== 2. MODULE SCOPE ==========");

let secret = "hidden inside module";

function revealSecret() {
  console.log(secret);
}

revealSecret();

/*
Variables inside modules are NOT global.
*/


console.log("\n========== 3. CIRCULAR DEPENDENCY TEST ==========");

import { fromA } from "./circular-a.js";

console.log(fromA());


console.log("\n========== END OF EXPERIMENT ==========");