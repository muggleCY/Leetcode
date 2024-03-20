/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numberOfPairs = function (nums) {
    let count = 0
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], !(map.get(nums[i]) || false))
        if (!map.get(nums[i])) {
            count++
        }
    }
    return [count, nums.length - 2 * count]
};
