/*
 Task: Function Memoization
 Implement a memoization function that caches the results of expensive function 
 calls and returns the cached result when the same inputs occur again.
 */

function memoize(func) {
  var cache = {};
  return function () {
    var key = JSON.stringify(arguments[0]);
    if (cache[key]) {
      return cache[key];
    } else {
      var result = func.apply(this, arguments);
      cache[key] = result;
      return result;
    }
  };
}

function square(n) {
  console.log("Square of", n);
  return n * n;
}

var memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(10));
console.log(memoizedSquare(10));
