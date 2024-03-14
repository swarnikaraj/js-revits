//object can be created in 3 ways

//1 Objuectv literals  , here new keword cannot be used

const Animal1 = {
  eyes: 2,
  ears: 2,
  age: "12 month",
  getage: function () {
    console.log("Animal age object literals", this.age);
  },
};
console.log(Animal1, "new animal from object literals");
Animal1.getage();
// 2 function constructor

function Animal(eyes, ears, age) {
  (this.eyes = eyes), (this.ears = ears), (this.age = age);
  this.getAge = () => {
    console.log("Age from function constructor", age);
  };
}

const newanimal = new Animal(3, 4, 5);

console.log(newanimal, "new animal from function constructor");
newanimal.getAge();

class Animal3 {
  constructor(eyes, ears, age) {
    (this.eyes = eyes), (this.ears = ears), (this.age = age);
  }

  getage() {
    console.log(this.age, "new animal age from class");
  }
}

const animal3 = new Animal3(2, 4, 8);

console.log(animal3, "from class");
animal3.getage();
