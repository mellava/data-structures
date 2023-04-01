var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.head === null) {
      this.head = Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = Node(value);
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    var val = this.head.value;
    this.head = this.head.next;
    return val;
  };

  list.contains = function(target) {
    var currNode = this.head;
    while (true) {
      if (currNode.value === target) {
        return true;
      }
      if (currNode.next) {
        currNode = currNode.next;
      } else {
        return false;
      }
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
