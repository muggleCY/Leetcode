/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
    let res = 0, sign = 1
    while (n > 0) {
        res += n % 10 * sign
        sign = -sign
        n = Math.floor(n/10)
    }
    // 如果sign最后为-1，说明计算最高位时用的sign为1，return res，如果sign最后为1，说明计算最高位时用的sing是-1，return -res
    return -sign *res
};
