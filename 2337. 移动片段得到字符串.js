/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 * 双指针
 * 用 i 和 j 分别表示 start 和 target 中的下标，从左到右遍历 start 和 target，跳过所有的 ‘_’，当 i 和 j 都小于 len 时，比较非 ‘_’ 的字符
 * start[i] !== target[j] start 和 target 中的当前字符不匹配，返回 false
 * 当前字符是 ‘L’ 时应有 i≥j，当前字符是 ‘R’ 时应有 i≤j(L往左移 R往右移)
 * i 和 j 中有一个下标大于等于 len，则有一个字符串已经遍历到末尾，继续遍历另一个字符串中的其余字符
 * 如果其余字符中出现非 ‘_’ 的字符，则该字符不能与任意字符匹配，返回 false
 */
var canChange = function (start, target) {
    const len = start.length
    let i = 0, j = 0
    while (i < len && j < len) {
        while (i < len && start[i] === '_') {
            i++
        }
        while (j < len && target[j] === '_') {
            j++
        }
        if (i < len && j < len) {
            if (start[i] !== target[j]) {
                return false
            }
            if ((start[i] === 'L' && i < j) || (start[i] === 'R' && i > j)) {
                return false
            }
            i++
            j++
        }
    }
    while (i < len) {
        if (start[i] !== '_') {
            return false
        }
        i++
    }
    while (j < len) {
        if (target[j] !== '_') {
            return false
        }
        j++
    }
    return true
};

/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 * 作者：灵茶山艾府
 * 链接：https://leetcode.cn/problems/move-pieces-to-obtain-a-string/solutions/1658923/nao-jin-ji-zhuan-wan-pythonjavacgo-by-en-9sqt/
 * 来源：力扣（LeetCode）
 */
var canChange1 = function (start, target) {
    if (start.replaceAll('_', '') !== target.replaceAll('_', ''))
        return false;
    let j = 0;
    for (let i = 0; i < start.length; i++) {
        if (start[i] === '_')
            continue;
        while (target[j] === '_')
            j++;
        if (i !== j && (start[i] === 'L') === (i < j))
            return false;
        j++;
    }
    return true;
};
