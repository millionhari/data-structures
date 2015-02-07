  var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head === null && list.tail === null){
      list.head = newNode;
      list.tail = newNode;
      return;
    }

    list.tail.next = newNode;
    list.tail = newNode;
  };

  list.removeHead = function(){
    //store value of head
    var result = list.head.value;
    //reassign head to next node
    list.head = list.head.next;
    //return value of previous head
    return result;
  };

  list.contains = function(target){
    //look to see if next node is null
      if (this.head){
        return this.head.contains;
      } else {
        if(this.next === null){
         // return false if true
         return false;
        }
        //compare value to target
        if(target === this.value){
         //return true if found
         return true;
        } else {
          return this.next.contains(target);
        }
      }
    //else

      //recurse on next node
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
