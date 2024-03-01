/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 * 左下角横坐标：两个矩形左下角横坐标的最大值。
 * 左下角纵坐标：两个矩形左下角纵坐标的最大值。
 * 右上角横坐标：两个矩形右上角横坐标的最小值。
 * 右上角纵坐标：两个矩形右上角纵坐标的最小值。
 */
const largestSquareArea = function (bottomLeft, topRight) {
    let ans = 0
    for (let i = 0; i < bottomLeft.length; i++) {
        let b1 = bottomLeft[i]
        let t1 = topRight[i]
        for (let j = i + 1; j < topRight.length; j++) {
            let b2 = bottomLeft[j]
            let t2 = topRight[j]
            let height = Math.min(t2[1], t1[1]) - Math.max(b2[1], b1[1])
            let width = Math.min(t2[0], t1[0]) - Math.max(b2[0], b1[0])
            let size = Math.min(height, width)
            if (size > 0) {
                ans = Math.max(ans, size * size)
            }
        }
    }
    return ans
};
