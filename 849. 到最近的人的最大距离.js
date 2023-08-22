/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    let res = 0, l = 0
    // 找到最左边的有人座位
    while (l < seats.length && seats[l] === 0) {
        l++
    }
    res = l
    while (l < seats.length) {
        let r = l + 1
        //判断第二个有人座位的位置
        while (r < seats.length && seats[r] === 0) {
            r++
        }
        if (r === seats.length) {
            //如果没有第二个有人座位(最大值就是第一个有人座位的左边或者右边)
            res = Math.max(res, r - l - 1)
        } else {
            //如果有第二个有人座位(最大值就是第一个有人座位的左边或者两个座位的中间)
            res = Math.max(res, parseInt((r - l) / 2))
        }
        l = r
    }
    return res

};
