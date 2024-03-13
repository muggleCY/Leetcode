/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
    const occur = new Map()
    for (let x of arr) {
        if (occur.has(x)) {
            occur.set(x, occur.get(x) + 1)
        } else {
            occur.set(x, 1)
        }
    }
    let times = new Set()
    for (let [key, value] of occur) {
        times.add(value)
    }
    return times.size === occur.size
};
