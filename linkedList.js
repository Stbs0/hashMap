export class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
export class LinkedList {
  constructor(HEAD = null) {
    this.HEAD = HEAD;
  }
  append(value) {
    let node = this.HEAD;
    if (!node) {
      this.HEAD = new Node(value);
    } else {
      while (node.nextNode) {
        node = node.nextNode;
      }
      node.nextNode = new Node(value);
    }
  }
  prepend(value) {
    const node = this.HEAD;
    this.HEAD = new Node(value, node);
  }
  size() {
    let count = 0;
    let node = this.HEAD;
    while (node) {
      count++;
      node = node.nextNode;
    }
    return count;
  }
  head() {
    return this.HEAD;
  }
  tail() {
    let node = this.HEAD;
    while (node.nextNode) {
      node = node.nextNode;
    }
    return node;
  }

  at(index) {
    let node = this.HEAD;
    let count = 0;
    while (count < index && node) {
      node = node.nextNode;
      count++;
    }
    return node;
  }
  pop() {
    let node = this.HEAD;
    while (node.nextNode.nextNode) {
      node = node.nextNode;
    }
    node.nextNode = null;
  }
  contains(value) {
    let node = this.HEAD;
    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.nextNode;
    }
    return false;
  }
  find(value) {
    let node = this.HEAD;
    let index = 0;
    while (node) {
      node = node.nextNode;
      if (node.value === value) {
        return index;
      }
      index++;
    }
  }
  toString() {
    let node = this.HEAD;
    while (node) {
      process.stdout.write(`${node.value} -> `);
      node = node.nextNode;
    }
    console.log(node);
  }
  insertAt(value, index) {
    let node = this.at(index - 1);
    node.nextNode = new Node(value, node.nextNode);
  }
  removeAt(index) {
    let node = this.at(index - 1);
    node.nextNode = node.nextNode.nextNode;
  }
}
