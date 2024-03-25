/**
 * @param {number} n
 * @return {number}
 */
var f = function (n, m) {
    return (m + Math.floor(n / m) * m) * Math.floor(n / m) / 2;
}
var sumOfMultiples = function (n) {
    return f(n, 3) + f(n, 5) + f(n, 7) - f(n, 3 * 5) - f(n, 3 * 7) - f(n, 5 * 7) + f(n, 3 * 5 * 7);
};
