/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 * 第 1 个小朋友的起始位置为 0  创建一个所有小朋友的visit数组 如果球在该位置 数字++ 最后判断哪个为0就是未访问过的
 */
var circularGameLosers = function (n, k) {
    let visit = new Array(n).fill(0)
    let i = 0 //球的位置
    let count = 0 //轮数
    while (visit[i] !== 2) {
        i = (i + count * k) % n
        count++
        visit[i]++
    }
    let res = []
    for (let j = 1; j <= n; j++) {
        if (visit[j] === 0) {
            res.push(j + 1)
        }
    }
    return res
};
