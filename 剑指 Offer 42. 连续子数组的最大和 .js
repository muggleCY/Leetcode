/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划 只考虑i-1和i的大小
 */
var maxSubArray = function(nums) {
    let pre = 0,maxAns = nums[0]
    nums.forEach(x=>{
        pre = Math.max(pre+x,x)
        maxAns = Math.max(maxAns,pre)
    })
    return maxAns
};
