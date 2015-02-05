var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
  this.nextOut = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.length] = value;
  this.length++;
}

Queue.prototype.dequeue = function(){
  var result = this.storage[this.nextOut];
  delete this.storage[this.nextOut];
  this.nextOut++;
  return result;
}

Queue.prototype.size = function(){
  if (this.length - this.nextOut > 0){
    return this.length - this.nextOut;
  }
  return 0;
}
