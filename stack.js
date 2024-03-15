class Stack {
  constructor(size) {
    this.size = size;
    this.stack = Array(size).fill(0);
    this.ptr = -1;
  }
  addItem(item) {
    if (this.ptr == this.size - 1) {
      throw Error("Stack is full");
    }
    this.ptr++;
    this.stack[this.ptr] = item;
    return true;
  }
  removeItem() {
    if (this.ptr < 0) {
      return false;
    }
    this.ptr--;
    return true;
  }
  peekItem() {
    return this.stack[this.ptr];
  }
}

const mystack = new Stack(5);
mystack.addItem(2);
mystack.addItem(3);
mystack.addItem(4);
mystack.removeItem();
console.log(mystack.peekItem());
