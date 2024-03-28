// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const countCompleteSubarrays = function (nums) {
//     let size = new Set([...nums]).size
//     let left = 0
//     let right = 1
//     let resCnt = 0
//     while (left <= nums.length && right <= nums.length) {
//         let nowArr = nums.slice(left, right)
//         if (new Set([...nowArr]).size === size) {
//             resCnt += nums.length - right + 1
//             left++
//             right = left + 1
//         } else {
//             right++
//         }
//     }
//     return resCnt
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
const countCompleteSubarrays = function (nums) {
    const m = new Set(nums).size
    let cnt = new Map()
    let ans = 0, left = 0
    for (const v of nums) {
        cnt.set(v, (cnt.get(v) ?? 0) + 1)
        while (cnt.size === m) {
            const x = nums[left++] //取得左端点 left 对应的元素值 x，然后将 left 自增 1，即左端点向右移动。
            cnt.set(x, cnt.get(x) - 1)
            if (cnt.get(x) === 0) {
                cnt.delete(x)
            }
        }
        ans += left // 将 left 加到答案 ans 中，因为对于当前右端点 v，子数组的左端点在 left 之前的都是合法的完全子数组。
    }
    return ans
};
