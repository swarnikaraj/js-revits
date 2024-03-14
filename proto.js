// Person is a constructor function
function Person() {
  name: "hello";
}

// Create a personA object through the Person constructor function
const personA = new Person();

// Through the __proto__ method, view the prototype of personA
console.log(personA.__proto__); // {constructor: ƒ}

// personA object can be accessed to its prototype through the __proto__ method
personA.__proto__ === Person.prototype; // true
console.log(Object.getPrototypeOf(personA) === Person.prototype); // true
personA.__proto__ === Object.getPrototypeOf(personA); // true
console.log(personA.__proto__ === Object.getPrototypeOf(personA));
console.log(Person.prototype);
