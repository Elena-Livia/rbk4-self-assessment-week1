var Stack = function() {
    this._storage = {};
    this.counter = 0;
    this.add = function(value){
      this._storage[counter] = value
      counter++;
    };
    this.remove = function() {
    	var removedItem = this._storage[counter.length-1]
    	delete this._storage[counter.length-1]
    	this.counter--;
    	return removedItem;

         };
  };