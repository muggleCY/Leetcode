/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
    let maxWealth = -Number.MAX_VALUE
    for (let account of accounts) {
        maxWealth = Math.max(maxWealth, account.reduce((a, b) => (a + b)))
    }
    return maxWealth
};
