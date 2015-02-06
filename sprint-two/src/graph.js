

var Graph = function(){
  this.nodes = [];
};

Graph.prototype.addNode = function(node){
  var toArr = [node, []];
  this.nodes.push(toArr);
  console.log(this.nodes);
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
  var indexTo;

  //to node
  _.each(this.nodes, function(element, index){
    if (element[0] === toNode){
      indexTo = index;
    }
  });

  //from node
  _.each(this.nodes, function(element, index, collection){
    if (element[0] === fromNode){
      element[1].push(collection[indexTo]);
    }
  });
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



