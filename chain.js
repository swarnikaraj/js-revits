function compute() {
    this.total=0
  this.lack = (amount) => {
    this.total+=amount*100000
    console.log("inside lack");
  };
  this.crore = (amount) => {
    this.total += amount * 10000000;
    console.log("inside lack");
  };

  return this;
}
compute().lack();
