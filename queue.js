const _Node = require('./node.js');

class Queue {
  constructor() {
    this.value = null;
    this.next = null;
  }
  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last 
    //item on the queue
    this.last = node;
  }
  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}
module.exports = Queue;
