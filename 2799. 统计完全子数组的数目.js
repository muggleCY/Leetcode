/**
 * @param {number[]} nums
 * @return {number}
 */
const countCompleteSubarrays = function (nums) {
    let size = new Set([...nums]).size
    let left = 0
    let right = 1
    let resCnt = 0
    while (left <= nums.length && right <= nums.length) {
        let nowArr = nums.slice(left, right)
        if (new Set([...nowArr]).size === size) {
            resCnt += nums.length - right + 1
            left++
            right = left + 1
        } else {
            right++
        }
    }
    return resCnt
};
