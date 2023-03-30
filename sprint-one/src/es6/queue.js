class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.index = 0;
  }

  enqueue(value) {
    this.storage[this.size() + this.index + 1] = value;
  }

  dequeue() {
    this.index++;
    var temp = this.storage[this.index];
    delete this.storage[this.index];
    return temp;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
