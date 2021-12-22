/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function(arr, k) {
  arr = arr.sort(function(a,b){
      return a-b;
  })
  return arr.slice(0,k)
};