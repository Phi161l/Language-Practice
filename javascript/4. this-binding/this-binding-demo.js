/**
 * EXPERIMENT 4: THE "this" KEYWORD
 *
 * Concepts:
 * - this in regular functions
 * - this in object methods
 * - this in arrow functions
 * - call / apply / bind
 *
 * Rule:
 * Predict first. Then run.
 */

console.log("========== 1. this IN GLOBAL SCOPE ==========");

console.log(this); // In Node, what is this?


console.log("\n========== 2. this IN REGULAR FUNCTION ==========");

function showThis() {
  console.log(this);
}

showThis(); // ?


console.log("\n========== 3. this IN OBJECT METHOD ==========");

const user = {
  name: "Ibrahim",
  greet() {
    console.log("Hello, my name is", this.name);
  }
};

user.greet(); // ?


console.log("\n========== 4. LOST this ==========");

const greetFunction = user.greet;
greetFunction(); // ? why?


console.log("\n========== 5. FIXING WITH bind ==========");

const fixedGreet = user.greet.bind(user);
fixedGreet(); // ?


console.log("\n========== 6. call & apply ==========");

function introduce(city, country) {
  console.log(
    `Hi, I'm ${this.name} from ${city}, ${country}`
  );
}

introduce.call(user, "Addis Ababa", "Ethiopia"); // ?
introduce.apply(user, ["Addis Ababa", "Ethiopia"]); // ?


console.log("\n========== 7. ARROW FUNCTION this ==========");

const person = {
  name: "Sara",
  normalFunction: function () {
    console.log("normal:", this.name);
  },
  arrowFunction: () => {
    console.log("arrow:", this.name);
  }
};

person.normalFunction(); // ?
person.arrowFunction();  // ?


console.log("\n========== 8. ARROW INSIDE METHOD ==========");

const team = {
  name: "Dev Team",
  members: ["A", "B"],
  showMembers() {
    this.members.forEach(member => {
      console.log(this.name, member);
    });
  }
};

team.showMembers(); // ?


console.log("\n========== END OF EXPERIMENT ==========");
