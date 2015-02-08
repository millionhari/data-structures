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
  var node = list.head;

  while(node){
     if(node.value === target){
      return true;
     }
     node = node.next;
   }
   return false;
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
