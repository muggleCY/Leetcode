/**
 * @param {string} s
 * @return {string}
 * split空格分隔 reverse数组反转 join数组合并
 */
var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(' ')
};
/**
 * @param {string} s
 * @return {string}
 * i为字母的第一个 j找到第一个空格 存入数组 以此类推 最后数组合并
 */
var reverseWords1 = function (s) {
    let i = 0, len = s.length, j = 0, arr = []
    s = s.trim()
    while (j < len) {
        while (j < len && s[j] !== ' ') j++
        arr.unshift(s.slice(i, j))
        while (j < len && s[j] === ' ') j++
        i = j
    }
    return arr.join(' ')
};
