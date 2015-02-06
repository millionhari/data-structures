var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods)

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  //look at this
  //does this.value === target
  if (this.value === target) {
    //if yes, return true
    return true;
  }
    //if not, look at children
      //are there children?
  if (this.children.length){
        //if yes, loop through children and run contains on each element
    var result = false;
    _.each(this.children, function(element, index){
        //if any return true, return true
      if (element.contains(target)){
        result = true;
      }
    });
        //else return false;
  return result;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
