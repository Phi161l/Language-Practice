/**
 * EXPERIMENT 13: RENDERING PIPELINE
 *
 * Concepts:
 * - DOM updates
 * - Reflow (layout)
 * - Repaint
 * - Layout thrashing
 * - Performance measurement
 */

const box = document.getElementById("box");

console.log("========== 1. REFLOW EXAMPLE ==========");

/*
Changing layout properties triggers reflow
*/

document.getElementById("reflowBtn").onclick = () => {

  const start = performance.now();

  for (let i = 0; i < 5000; i++) {
    box.style.width = (100 + i % 200) + "px";
  }

  const end = performance.now();

  console.log("Reflow operation took:", end - start, "ms");
};


console.log("\n========== 2. REPAINT EXAMPLE ==========");

/*
Changing color does NOT affect layout
Only repaint happens
*/

document.getElementById("repaintBtn").onclick = () => {

  const start = performance.now();

  for (let i = 0; i < 5000; i++) {
    box.style.backgroundColor =
      i % 2 === 0 ? "red" : "blue";
  }

  const end = performance.now();

  console.log("Repaint operation took:", end - start, "ms");
};


console.log("\n========== 3. LAYOUT THRASHING ==========");

/*
Worst pattern:
Read layout → Write layout → Read layout
*/

function layoutThrashing() {

  for (let i = 0; i < 1000; i++) {

    const height = box.offsetHeight; // forces layout calculation

    box.style.height = height + 1 + "px";
  }

}

console.log("Layout thrashing function ready");


console.log("\n========== 4. BATCHED DOM UPDATES ==========");

/*
Better pattern:
Batch reads and writes
*/

document.getElementById("batchBtn").onclick = () => {

  const start = performance.now();

  let heights = [];

  for (let i = 0; i < 1000; i++) {
    heights.push(box.offsetHeight);
  }

  for (let i = 0; i < 1000; i++) {
    box.style.height = heights[i] + 1 + "px";
  }

  const end = performance.now();

  console.log("Batched update took:", end - start, "ms");
};


console.log("\n========== 5. requestAnimationFrame ==========");

/*
Best practice for animations
*/

function animate() {

  let width = 100;

  function frame() {

    width += 2;

    box.style.width = width + "px";

    if (width < 300) {
      requestAnimationFrame(frame);
    }

  }

  requestAnimationFrame(frame);
}

console.log("Call animate() in console to see smooth animation");


console.log("\n========== END OF EXPERIMENT ==========");