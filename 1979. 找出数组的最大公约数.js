/**
 * @param {number[]} nums
 * @return {number}
 */
const findGCD = function (nums) {
    let max = Math.max(...nums)
    let min = Math.min(...nums)
    // 辗转相除法(图解 https://blog.csdn.net/2201_75314884/article/details/131206814) 求 最大公约数
    function gcd(a, b) {
        let r = a % b // 余数
        return b === 0 ? a : gcd(b, r)
    }

    return gcd(min, max)
};
