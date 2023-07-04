/**
 * @param {number} n
 * @return {number}
 * 先把所有数字变成跟最大的保持同位数
 * 然后根据n取到当前的数
 * 再取当前的位数
 */
var findNthDigit = function (n) {
    let i = 1
    while (i * Math.pow(10, i) < n) {
        n += Math.pow(10, i)
        i++
    }
    const partition = Math.floor(n / i) + ""
    return Number(partition.charAt(n % i))
};
