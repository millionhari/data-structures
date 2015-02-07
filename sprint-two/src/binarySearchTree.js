var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value){
  //add to left
  if(value < this.value){
    if(this.left === null){
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  //add to right
  if(value > this.value){
    if(this.right === null){
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value){
  //if this.value = value // return true
    if(this.value === value){
      return true;
    }
    //if value < this.value
    if(value < this.value && this.left !== null){
      //return contains on this.left
        return this.left.contains(value);
    }
    if(this.left === null){
      return false;
    }

    //if value > this.value
    if(value > this.value && this.right !== null){
      //return contains on this.left
        return this.right.contains(value);
    }
    if(this.right === null){
      return false;
    }
};

BinarySearchTree.prototype.depthFirstLog = function(cb){
  cb(this.value);
  if (this.left) this.left.depthFirstLog(cb);
  if (this.right) this.right.depthFirstLog(cb);
};

//worth some hi-chews
BinarySearchTree.prototype.breadthFirstLog = function(cb){

};

//worth lots of hi-chews
BinarySearchTree.prototype.rebalanceTree = function(){

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
