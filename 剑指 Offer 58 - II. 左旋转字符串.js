/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    let s1 = s.slice(0, n)
    let s2 = s.slice(n, s.length)
    return s2 + s1
};
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 * 先将字符串重复一次，拼接在结尾
 * 计算n = k % len
 * 然后再从双倍字符串的n处截取，截取len个即可
 */
var reverseLeftWords1 = function (s, n) {
    const len = s.length
    const k = n % len
    const double = `${s}${s}`
    return double.slice(k, k + len)
};
