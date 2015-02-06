

var Graph = function(){
  this.nodes = [];
};

Graph.prototype.addNode = function(node){
  var toArr = [node, null];
  this.nodes.push(toArr);
};

Graph.prototype.contains = function(node){
  var bool = false;
  _.each(this.nodes, function(element){
    if (element[0] === node){
      bool = true;
    }
  });
  return bool;

  // if(_.indexOf(this.nodes, node) > -1){
  //   return true;
  // }
  // return false;
};

Graph.prototype.removeNode = function(node){
  var index = _.indexOf(this.nodes, node);
  return this.nodes.splice(index, 1)[0];
};

Graph.prototype.hasEdge = function(fromNode, toNode){

};

Graph.prototype.addEdge = function(fromNode, toNode){
  //look through nodes array
  _.each(this.nodes, function(element){
    if (element[0] === fromNode){

    }
  });
  var indexFrom = _.indexOf(this.nodes[], fromNode);
  var indexTo = _.indexOf(this.nodes, toNode);
  this.nodes[indexFrom][1] = this.nodes[indexTo];
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



