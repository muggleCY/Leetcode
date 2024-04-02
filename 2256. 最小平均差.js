/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function (nums) {
    let lSum = 0
    let rSum = nums.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
    let n = nums.length
    let min = Infinity
    let maxVal = 0
    for (let i = 0; i < n; i++) {
        lSum += nums[i]
        rSum -= nums[i]
        let average
        if (i === n - 1) {
            average = Math.floor(lSum / (i + 1))
        } else {
            average = Math.abs(Math.floor(lSum / (i + 1)) - Math.floor(rSum / (n - i - 1)))
        }
        if (average < min) {
            min = average
            maxVal = i
        }
    }
    return maxVal
};
