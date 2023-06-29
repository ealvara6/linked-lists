class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let nextNode = this.head;
      while (nextNode.nextNode) {
        nextNode = nextNode.nextNode;
      }
      nextNode.nextNode = newNode;
    }
  }

  prepend(value) {
    if (this.head === null) {
      const newNode = new Node(value);
      this.head = newNode;
    } else {
      const newNode = new Node(value, this.head);
      this.head = newNode;
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const newList = new LinkedList();
newList.append(6)
newList.append(8);
console.log(newList);