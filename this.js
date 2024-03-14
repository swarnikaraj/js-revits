var num = 7;
const obj = {
  num: 5,
  arrowfunc1: () => {
    console.log(this.num);
  },
};

const obj2 = {
  num: 5,
  arrowfunc1: function () {
    console.log(this.num);
  },
};

let arrowfunc1 = () => {
  console.log(this);
};
arrowfunc1();

obj2.arrowfunc1();
function arrowfunc2() {
  console.log(this.num, "from func2");
}
console.log(num, "bahr hu");
arrowfunc2();

const obj3 = {
  count: 10,
  doSomethingLater() {
    setTimeout(function () {
      // It is a regular function, so this points to window
      this.count++;
      console.log(this.count, "obj3"); // NaN (because there is no count in windoww)
    }, 300);
  },
};
obj3.doSomethingLater();
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

console.log(obj3._proto_, "dsdsl");
