// console.log(this);
// console.log(this === module.exports )


// function showThis() {
//   console.log(this);
// }

// showThis(); //  






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


const fixedGreet = user.greet.bind(user);
fixedGreet();







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




a = 3
console.log(a)
var a = 2








const car = {
  brand: "Toyota",
  showBrand() {
    console.log(this.brand);
  }
};

car.showBrand(); // ?

const fn1 = car.showBrand;
fn1(); // ?



const obj = {
  name: "Ibrahim",
  outer() {
    console.log("outer:", this.name);

    function inner() {
      console.log("inner:", this.name);
    }

    inner();
  }
};

obj.outer(); // ?



const user2 = {
  name: "Abel",
  greet() {
    console.log("Hello", this.name);
  }
};

setTimeout(user2.greet, 100); // ?



function User(name) {
  this.name = name;

  this.say = () => {
    console.log(this.name);
  };
}

const u1 = new User("Daniel");
const sayFn = u1.say;
sayFn(); // ?




const test = {
  name: "Node",
  show: () => {
    console.log(this.name);
  }
};

test.show(); // ?
