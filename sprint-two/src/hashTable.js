var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];
  var added = false;
  if (Array.isArray(this._storage[i])){
    _.each(this._storage[i], function(element, index){
      if (element[0] === k){
        element[1] = v;
        added = true;
      }
    })
    if(added === false){
     this._storage[i].push(tuple);
    }
  } else {
    this._storage[i] = [tuple];
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result;
  _.each(this._storage[i], function(element, index){
    if(element[0] === k){
      result = element[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  _.each(this._storage[i], function(element, index){
    if(element[0] === k){
      element[1] = null;
    }
  });
  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
