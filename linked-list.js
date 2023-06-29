class LinkedList {
  constructor() {
    this._head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this._head === null) {
      this.head = newNode;
    } else {
      let nextNode = this._head;
      while (nextNode.nextNode) {
        nextNode = nextNode.nextNode;
      }
      nextNode.nextNode = newNode;
    }
  }

  prepend(value) {
    if (this._head === null) {
      const newNode = new Node(value);
      this.head = newNode;
    } else {
      const newNode = new Node(value, this._head);
      this.head = newNode;
    }
  }

  get size() {
    return this.calcSize();
  }

  calcSize() {
    let counter = 1;
    if (this._head === null) return 0;
    else {
      let node = this._head;
      while(node.nextNode) {
        counter += 1;
        node = node.nextNode;
      }
      return counter;
    }
  }

  get head() {
    return this._head;
  }

  set head(value) {
    this._head = value;
  }

  get tail() {
    return this.calcTail();
  }

  calcTail() {
    if (this._head === null) return null;
    else {
      let node = this._head;
      while (node.nextNode) node = node.nextNode;
      return node;
    }
  }

  at(index) {
    let node = this._head;
    for (let i = 0; i < index; i += 1) {
      if(node === null) return null;
      node = node.nextNode;
    }
    return node;
  }

  pop() {
    if (this._head === null) return null;
    if (this._head.nextNode === null) this._head = null;
    else {
      let node = this._head;
      for (let i = 0; i < this.calcSize() - 2; i += 1) {
        node = node.nextNode;
      }
      node.nextNode = null;
    }
  }

  contains(value) {
    if (this._head === null) return false;
    let node = this._head;
    for (let i = 0; i < this.calcSize(); i += 1) {
      if (node.value === value) return true;
      node = node.nextNode;
    }
    return false;
  }

  find(value) {
    if (this._head === null) return null;
    let node = this._head;
    for (let i = 0; i < this.calcSize(); i += 1) {
      if (node.value === value) return i;
      node = node.nextNode;
    }
    return null
  }

  toString () {
    let linkedListString = '';
    if (this._head === null) return null;
    let node =  this._head;
    for (let i = 0; i < this.calcSize(); i += 1) {
      if (node.nextNode === null) {
        linkedListString += `${node.value} -> Null`;
      } else {
        linkedListString += `${node.value} -> `;
        node = node.nextNode;
      }
    }
    return linkedListString;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}