var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var nextOut = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var result = storage[nextOut];
    delete storage[nextOut];
    nextOut++;
    return result;
  };

  someInstance.size = function(){
    if (size - nextOut > 0){
      return size - nextOut;
    }
      return 0;
  };

  return someInstance;
};
