/**
 * @param {number[]} nums
 * @return {number[]}
 * 异或 分组异或
 */
var singleNumbers = function (nums) {
    let num1 = 0;
    let num2 = 0;
    let temp = 0
    nums.forEach(item => {
        temp ^= item
    })
    let mark = temp ^ (temp & (temp - 1))
    nums.forEach(item => {
        if ((mark & item) === 0) {
            num1 ^= item
        } else {
            num2 ^= item
        }
    })
    return [num1, num2]
};
