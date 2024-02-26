/**
 * @param {string} s
 * @return {string}
 */
const lastNonEmptyString = function (s) {
    let cnt = new Array(26).fill(0)
    let last = new Array(26).fill(0)
    let sArr = s.split("")
    for (let i = 0; i < sArr.length; i++) {
        let temp = sArr[i].charCodeAt(0) - 'a'.charCodeAt(0)
        cnt[temp]++
        last[temp] = i
    }
    let max = Math.max(...cnt)
    let ids = []
    let lastS = []
    for (let i = 0; i < 26; i++) {
        if (cnt[i] === max) {
            ids.push(last[i])
        }
    }
    ids.sort((a, b) => a - b)
    for (let i of ids) {
        lastS.push(s[i])
    }
    return lastS.join("")
};
