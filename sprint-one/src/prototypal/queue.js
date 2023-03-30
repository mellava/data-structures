var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.index = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

queueMethods.enqueue = function(value) {
  this.storage[this.size() + this.index + 1] = value;
};

queueMethods.dequeue = function() {
  var temp = this.storage[this.index + 1];
  delete this.storage[this.index + 1];
  this.index++;
  return temp;
};


