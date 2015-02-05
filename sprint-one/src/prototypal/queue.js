var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(queueMethods);
  newInstance.length = 0;
  newInstance.nextOut = 0;
  newInstance.storage = {};

  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function(){
  var result = this.storage[this.nextOut];
  delete this.storage[this.nextOut];
  this.nextOut++;
  return result;
};

queueMethods.size = function(){
  if (this.length - this.nextOut > 0){
    return this.length - this.nextOut;
  }

  return 0;
};
