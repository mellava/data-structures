var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.index = 0;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.size() + this.index + 1] = value;
};

Queue.prototype.dequeue = function() {
  this.index++;
  var temp = this.storage[this.index];
  delete this.storage[this.index];
  return temp;
};

var queue = new Queue();
