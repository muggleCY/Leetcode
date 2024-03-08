/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = function (nums, queries) {
    let ans = [], sum = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] % 2 === 0) {
            sum += nums[j]
        }
    }
    for (let i = 0; i < queries.length; i++) {
        let val = queries[i][0], index = queries[i][1]
        if (nums[index] % 2 === 0) sum -= nums[index]
        nums[index] += val
        if (nums[index] % 2 === 0) sum += nums[index]
        ans[i] = sum
    }
    return ans
};
