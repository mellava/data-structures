

// Instantiate a new graph
var Graph = function() {
  this.graph = {};

};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  node = String(node);
  this.graph[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  node = String(node);
  var nodes = Object.keys(this.graph);
  var hasNode = nodes.includes(node);
  return (hasNode);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  node = String(node);
  var keys = Object.keys(this.graph);

  for (var i = 0; i < keys.length; i++) {
    key = String(keys[i]);
    if (key !== node) {
      this.removeEdge(key, node);
    }
  }

  delete this.graph[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  fromNode = String(fromNode);
  toNode = String(toNode);

  if (this.graph[fromNode] && this.graph[toNode]) {
    var t1 = this.graph[fromNode].includes(toNode);

    var t2 = this.graph[toNode].includes(fromNode);
    return (t1 && t2);
  } else {
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  fromNode = String(fromNode);
  toNode = String(toNode);
  this.graph[fromNode].push(toNode);
  this.graph[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  fromNode = String(fromNode);
  toNode = String(toNode);
  this.graph[fromNode] = this.graph[fromNode].filter(function(edge) { return (edge !== toNode); });
  this.graph[toNode] = this.graph[toNode].filter(function(edge) { return (edge !== fromNode); });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  var nodes = Object.keys(this.graph);
  for (var i = 0; i < nodes.length; i++) {
    cb(nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


