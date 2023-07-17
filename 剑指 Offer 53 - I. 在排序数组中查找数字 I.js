/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分查找发 找到target在数组中第一次和最后一次出现的位置 则出现的次数为right-left+1
 */
var search = function (nums, target) {
    const length = nums.length
    let left = 0, right = length - 1
    let start = -1, end = -1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            start = mid
            right = mid - 1
        }
    }
    left = 0
    right = length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            end = mid
            left = mid + 1
        }
    }
    return start <= end && start !== -1 ? end - start + 1 : 0;
};
