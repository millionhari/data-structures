

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

};

Graph.prototype.removeNode = function(node){
  var index = _.indexOf(this.nodes, node);
  return this.nodes.splice(index, 1)[0];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  //search for fromnode (loop through this.nodes)
  var result = false;
  _.each(this.nodes, function(element, index, list){
    //look at the edges array for the from node (loop)
    if (element[0] === fromNode) {
      _.each(element[1], function(item, i, l){
        if (item[0] === toNode) {
          result = true;
        }
      });
    }
  });
  return result;
      //if we find toNode in the edges array, return true

};

Graph.prototype.addEdge = function(fromNode, toNode){

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
  //search this.nodes (loop)
  _.each(this.nodes, function(element, index, list){
    //if element[0] === fromNode
    if(element[0] === fromNode){
      //loop element[1]
      _.each(element[1], function(item, i, collection){
        //if item === toNode
        if(item[0] === toNode){
          //splice item
          item.splice(0,1);
        }

      });

    }

  });
};

Graph.prototype.forEachNode = function(cb){
  //loop through this.nodes
  _.each(this.nodes, function(element, index, list){
    //run cb(element[0])
    cb(element[0]);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



