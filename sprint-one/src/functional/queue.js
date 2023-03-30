var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var index = 0;
  someInstance.enqueue = function(value) {
    storage[someInstance.size() + index + 1] = value;
  };

  someInstance.dequeue = function() {
    var temp = storage[index + 1];
    delete storage[index + 1];
    index++;
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
