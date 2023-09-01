/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
let waysToBuyPensPencils = function (total, cost1, cost2) {
    let num = 0
    for (let i = 0; i * cost1 <= total; i++) {
        let other = Math.floor((total - i * cost1) / cost2)
        num = num + other + 1
    }
    return num
};
