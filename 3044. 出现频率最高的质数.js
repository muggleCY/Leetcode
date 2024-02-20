/**
 * @param {number[][]} mat
 * @return {number}
 */
const mostFrequentPrime = function (mat) {
    const DIRS = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]]
    let m = mat.length, n = mat[0].length
    let cnt = new Map()
    let isPrime = function (num) {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let d of DIRS) {
                let x = i + d[0]
                let y = j + d[1]
                let v = mat[i][j]
                while (x >= 0 && x < m && y >= 0 && y < n) {
                    //判断该单元格的可移动路径 并且生成路径数字
                    v = v * 10 + mat[x][y]
                    if (isPrime(v)) {
                        cnt.set(v, (cnt.get(v) || 0) + 1)
                    }
                    x += d[0]
                    y += d[1]
                }
            }
        }
    }
    let ans = -1
    let maxCnt = 0
    for (const [key, value] of cnt) {
        if (value > maxCnt) {
            ans = key
            maxCnt = value
        } else if (value === maxCnt) {
            ans = Math.max(ans, key)
        }
    }
    return ans
};
