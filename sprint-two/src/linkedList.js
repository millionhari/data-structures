  var LinkedList = function(){
  var list = {};
  list.head = 0;
  list.tail = 0;

  list.addToTail = function(value){
    //If tail is null, set tail to 0
    if (list.tail === null){
      list.tail = 0;
    }
    //Create node at current tail
    list[list.tail] = Node(value);

    //If list's tail is 0,
    if (list.tail-list.head > 0){
      list[list.tail-1].next = list[list.tail].value;
    }

    //Go to next tail
    list.tail++;
  };

  list.removeHead = function(){
  };

  list.contains = function(target){
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
