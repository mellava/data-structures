/*var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size() + 1] = value;
  };

  someInstance.pop = function() {
    var temp = storage[someInstance.size()];
    delete storage[someInstance.size()];
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
*/

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.pop = function() {
    if (size === 0) {
      return;
    } else {
      var temp = storage[size];
      delete storage[size];
      size--;
      return temp;
    }
  };


  someInstance.size = function() {
    return size;
  };

  return someInstance;
};