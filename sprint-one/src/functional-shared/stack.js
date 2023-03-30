var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // factory
  var newStack = {};
  newStack.storage = {};
  extend(newStack, stackMethods);
  // how to say it technically correct^
  return newStack;
};

var stackMethods = {};

var extend = function(source, destination) {
  for (var key in destination) {
    source[key] = destination[key];
  }
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

stackMethods.push = function(value) {
  this.storage[this.size() + 1] = value;
};

stackMethods.pop = function() {
  var temp = this.storage[this.size()];
  delete this.storage[this.size()];
  return temp;
};



