/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
    let ans = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i + 2] - nums[i] > k) return []
        ans.push([nums[i], nums[i + 1], nums[i + 2]])
    }
    return ans
};
