/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumCount = function (nums) {
    // let pos = 0
    // let neg = 0
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] > 0) {
    //         pos++
    //     } else if (nums[i] < 0) {
    //         neg++
    //     }
    // }
    // return pos > neg ? pos : neg
    const binarySearch = (nums, target) => {
        let left = 0, right = nums.length - 1
        while (left <= right) {
            let mid = (left + right) >> 1
            if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return left
    }
    return Math.max(binarySearch(nums, 0), nums.length - binarySearch(nums, 1))
};
