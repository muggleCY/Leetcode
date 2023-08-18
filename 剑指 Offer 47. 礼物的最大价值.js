/**
 * @param {number[][]} grid
 * @return {number}
 * f(i,j) = Math.max(f(i - 1,j) + grid(i,j), f(i,j - 1) + grid(i,j));
 */
var maxValue = function (grid) {
    const m = grid.length
    const n = grid[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                continue
            }
            if (i === 0) {
                grid[i][j] = grid[i][j] + grid[i][j - 1]
                continue
            }
            if (j === 0) {
                grid[i][j] = grid[i][j] + grid[i - 1][j]
                continue
            }
            grid[i][j] = Math.max(grid[i][j] + grid[i][j - 1], grid[i][j] + grid[i - 1][j])
        }
    }
    return grid[m - 1][n - 1]
};
