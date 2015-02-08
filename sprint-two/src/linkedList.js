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
    if(list.head === null){
      return false;
    }
    // If value === target, return true
    if(this.value === target){
      return true;
    }
    // If next pointer is equal to null, return false
    if(this.next === null){
      return false;
    }
    // If list has a head, run contain on head
    if(this.head){
      return list.contains.call(list.head, target);
    } else {
    // If list does not have a head, run contain on next.
      return list.contains.call(this.next, target);

    }
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
