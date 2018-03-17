var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value) {
        //your code is here
        this._storage[hashFn(key, max)] = index;

        var bucket = this._storage[index];

 //check if there is a bucket at this index       
        if(!bucket) {
          
//if there is not, create it
          var bucket = [];

        }
//iterate through the bucket to check if  tuple[0]===k; if they match, overwrite tuple [1]
        for(var i=0, i<bucket.length; i++) {
          var tuple = bucket[i];
          if(tuple[0]===key) {

          }
        }
//if no key matches the value, then push to the array

    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};