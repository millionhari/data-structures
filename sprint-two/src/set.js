var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this.storage.push(item);
};

setPrototype.contains = function(item){
  var result = false;
  _.each(this.storage, function(element, index, list){
    if (element === item){
      result = true;
    }
  })
  return result;
};

setPrototype.remove = function(item){
  var target;
  _.each(this.storage, function(element, index){
    if (element === item){
      target = index;
    }
  })
  return this.storage.splice(target, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
