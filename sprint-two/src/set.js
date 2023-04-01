var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {

  if (this._storage.indexOf(item) > -1) { // Exists in the set
    return;
  }
  this._storage.push(item); // If doesn't exist
};

setPrototype.contains = function(item) {
  var index = this._storage.indexOf(item); // Get index
  if (index > -1) { // If it exists
    return true; //
  } else {
    return (false); // If it doesn't exist
  }

};

setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item); // Get index
  if (index > -1) { // If it exists
    this._storage.splice(index, 1); //
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
