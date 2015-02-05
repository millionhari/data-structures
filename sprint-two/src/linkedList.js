  var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var tailIndex = 0;
  var headIndex = 0;

  list.addToTail = function(value){
    //Create node at current tail
    list[tailIndex] = Node(value);
    list.tail = Node(value);

    if (list.head === null){
      list[headIndex] = Node(value);
      list.head = Node(value);
    }

    //If list has more than 1 node, assign pointer to next node
    if (tailIndex - headIndex > 0 ){
      list[tailIndex-1].next = list[tailIndex];
    }
    //Go to next tail
    tailIndex++;
  };

  list.removeHead = function(){
    var result = list[headIndex];
    delete list[headIndex];
    headIndex++;
    list.head = list[headIndex];
    return result.value;
  };

  list.contains = function(target){
    for(var key in list){
      if(list[key]['value'] === target){
        return true;
      }
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
