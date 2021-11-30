/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  nums.sort((a,b)=>{
      return a-b
  });
  let mid = Math.floor(nums.length/2)
  return nums[mid]
};