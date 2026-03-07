/**
 * EXPERIMENT 11: DOM EVENTS
 *
 * Concepts:
 * - DOM selection
 * - Event listeners
 * - Event bubbling
 * - Event capturing
 * - Event delegation
 */

console.log("========== 1. SELECT ELEMENTS ==========");

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");


console.log("\n========== 2. EVENT BUBBLING ==========");

/*
Default event behavior: bubbling

Event travels:
child → parent → grandparent → document
*/

child.addEventListener("click", () => {
  console.log("Child clicked");
});

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

grandparent.addEventListener("click", () => {
  console.log("Grandparent clicked");
});


console.log("\n========== 3. EVENT CAPTURING ==========");

/*
Capture phase runs BEFORE bubbling.

Use third parameter: true
*/

grandparent.addEventListener(
  "click",
  () => {
    console.log("Grandparent capture");
  },
  true
);


console.log("\n========== 4. STOP PROPAGATION ==========");

child.addEventListener("dblclick", (event) => {
  console.log("Child double clicked");
  event.stopPropagation();
});

/*
stopPropagation prevents the event
from moving further up the tree.
*/


console.log("\n========== 5. EVENT DELEGATION ==========");

const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  console.log("List clicked");

  if (event.target.tagName === "LI") {
    console.log("You clicked:", event.target.textContent);
  }
});

/*
Instead of adding listeners to each <li>,
we attach one listener to the parent.

This is event delegation.
*/


console.log("\n========== 6. DYNAMIC ELEMENT TEST ==========");

/*
Add new list items dynamically
Delegation still works.
*/

setTimeout(() => {
  const newItem = document.createElement("li");
  newItem.textContent = "Item 4 (added later)";
  list.appendChild(newItem);
}, 3000);


console.log("\n========== END OF EXPERIMENT ==========");