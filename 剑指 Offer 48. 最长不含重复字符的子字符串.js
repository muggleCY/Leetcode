/**
 * @param {string} s
 * @return {number}
 * 循环s 循环判断下一个是不是重复 在循环过程中 如果重复就把occ中的第一个删除 继续循环
 */
var lengthOfLongestSubstring = function (s) {
    let occ = new Set()
    let n = s.length
    let index = -1
    let ans = 0
    for (let i = 0; i < n; i++) {
        if (i !== 0) {
            occ.delete(s.charAt(i - 1))
        }
        while (index + 1 < n && !occ.has(s.charAt(index + 1))) {
            occ.add(s.charAt(index + 1))
            index++
        }
        ans = Math.max(ans, index - i + 1)
    }
    return ans
};
