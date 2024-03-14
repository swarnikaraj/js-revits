class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  appendData(data) {
    const newnode = new Node(data);

    if (this.head == null) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newnode;
      this.tail = newnode;
    }

    this.size++;
  }

  addHead(data) {
    const newnode = new Node(data);

    if (this.head == null) {
      this.head = newnode;
    } else {
      newnode.next = this.head;
      this.head = newnode;
    }
    this.size++;
  }

  
}

const ll = new LinkedList();

ll.appendData(1);
ll.appendData(2);
ll.appendData(3);

ll.addHead(6);

console.log(ll, "linkedlist hu 52");
