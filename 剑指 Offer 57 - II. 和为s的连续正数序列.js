/**
 * @param {number} target
 * @return {number[][]}
 * 滑动窗口 相等就继续向右搜索(缩小左边) 大于就缩小左边 小于就扩大右边
 */
var findContinuousSequence = function (target) {
    let left = 1
    let right = 2
    let sum = 3
    let res = []
    while (left < right) {
        if (left + right === target) {
            let ans = []
            for (let i = left; i <= right; i++) {
                ans[i - left] = i
            }
            res.push(ans)
            sum = sum - left
            left++
        } else if (sum < target) {
            right++
            sum = sum + right
        } else {
            sum = sum - left
            left++
        }
    }
    return res
};
