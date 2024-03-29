/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
    let n = s.length
    let step = 0
    let meet = false //记录我们有没有遇见过字符 1
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] == '0') {
            // 如果当前字符为 0，分为两种情况
            // (1) 还没有遇见过字符 1，那么这个 0 是字符串低位的 0，需要一次除二操作
            // (2) 遇见过字符 1，那么这个 0 会因为它右侧的某次加一操作变为 1，因此它需要一次加一和一次除二操作
            step += (meet ? 2 : 1)
        } else {
            // 如果当前字符为 1，分为两种情况
            // (1) 还没有遇见过字符 1，那么这个 1 需要一次加一和一次除二操作
            //     这里需要考虑一种特殊情况，就是这个 1 是字符串最左侧的 1，它并不需要任何操作
            // (2) 遇见过字符 1，那么这个 1 会因为它右侧的某次加一操作变为 0，因此它只需要一次除二操作
            if (!meet) {
                if (i != 0) {
                    step += 2
                }
                meet = true
            } else {
                step++
            }
        }
    }
    return step
};
