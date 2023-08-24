/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
    let m = grid.length, n = grid[0].length
    let col = [], row = []
    let ans = 0
    for (let i = 0; i < m; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                count++
            }
        }
        row[i] = count
    }
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < m; j++) {
            if (grid[j][i] === 1) {
                count++
            }
        }
        col[i] = count
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                if (row[i] > 1 || col[j] > 1) {
                    ans++
                }
            }
        }
    }

    return ans
};
