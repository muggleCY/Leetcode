/**
 * @param {string} s
 * @return {number}
 * 罗马数字中小的数字在大的数字的右边
 */
var romanToInt = function (s) {
    const values = new Map()
    values.set('I', 1)
    values.set('V', 5)
    values.set('X', 10)
    values.set('L', 50)
    values.set('C', 100)
    values.set('D', 500)
    values.set('M', 1000)
    let ans = 0
    const len = s.length
    for (let i = 0; i < len; i++) {
        const value = values.get(s[i])
        if (i < len - 1 && value < values.get(s[i + 1])) {
            ans -= value
        } else {
            ans += value
        }
    }
    return ans
};

/**
 * @param {string} s
 * @return {number}
 * 如果res>=5说明罗马数字中至少有一个V，也就是说遍历到这个字母之前，数字中已经出现一个V了，所以，它肯定不是作为1来算的
 */
var romanToInt1 = function (s) {
    let ans = 0
    for (let i = s.length - 1; i >= 0; i--) {
        let c = s[i]
        switch (c) {
            case 'I':
                ans += (ans >= 5 ? -1 : 1)
                break;
            case 'V':
                ans += 5
                break;
            case 'X':
                ans += 10 * (ans >= 50 ? -1 : 1)
                break;
            case 'L':
                ans += 50
                break;
            case 'C':
                ans += 100 * (ans >= 500 ? -1 : 1)
                break;
            case 'D':
                ans += 500
                break;
            case 'M':
                ans += 1000
                break;
        }
    }
    return ans
};
