var BinarySearchTree = function(value) {
  var node = Object.create(bstMethods);
  node.value = value;
  node.right = null;
  node.left = null;

  return (node);
};

bstMethods = {};

bstMethods.insert = function(value) {
  if (this.value === value) {
    return;
  } else {
    if (this.value > value) {
      if (this.left) {
        this.left.insert(value);
      } else { this.left = BinarySearchTree(value); }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else { this.right = BinarySearchTree(value); }
    }
  }
};

bstMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  if (this.value < value) {
    if (this.right) {
      return (this.right.contains(value));
    } else {
      return false;
    }
  } else {
    if (this.left) {
      return (this.left.contains(value));
    } else {
      return false;
    }
  }
  return (false);
};


bstMethods.depthFirstLog = function(func) {
  func(this.value);
  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
