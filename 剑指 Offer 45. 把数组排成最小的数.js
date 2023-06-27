/**
 * @param {number[]} nums
 * @return {string}
 *  用a+b与b+a来比较大小排序  并将数字转为字符串
 */
var minNumber = function (nums) {
    let numsNew = nums.sort((a, b) => {
        return (a.toString() + b.toString()) - (b.toString() + a.toString())
    })
    return numsNew.join("")
};
