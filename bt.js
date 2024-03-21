const readline = require("readline");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  display(node) {
    if (node == null) {
      return;
    }
    console.log(node.val);
    this.display(node.left);
    this.display(node.right);
  }
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function populateBt(node) {
  let r1 = rl.question(
    `Do you want to fill left of (press y to continue),${node.val}`,
    (input) => {
      if (input.trim() == "y") {
        rl.question(`Enter value on left of ${node.val}`, (input) => {
          let newnode = new Node(parseInt(input));
          console.log(newnode, "newnode created");
          node.addleft(newnode);
          populateBt(node.left);
        });
      } else {
        r1.close();
      }

      if (input.trim() == "n") {
        let r2 = rl.question(`Enter value on right of ${node.val}`, (input) => {
          let newnode = new Node(parseInt(input));
          console.log(newnode, "newnode created");
          node.addright(newnode);
          populateBt(node.right);
        });
      } else {
        r2.close();
      }
    }
  );
}
function InitiateBT() {
  rl.question("Enter the node value or press 0 to exit", (input) => {
    let num = parseInt(input);
    if (isNaN(num)) {
      console.log("Invalid input");
    } else if (num == 0) {
      console.log("Exiting");
      rl.close();
    } else {
      let root = new Node(num);
      console.log(root, "root created");
      populateBt(root);
    }
  });
}
InitiateBT();
