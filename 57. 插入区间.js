/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const res = []
    let i = 0
    const len = intervals.length
    //左边不重叠
    while (i < len && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i])
        i++
    }
    //重叠
    while (i < len && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0])
        newInterval[1] = Math.max(intervals[i][1], newInterval[1])
        i++
    }
    //右边不重叠
    res.push(newInterval)
    while (i < len) {
        res.push(intervals[i])
        i++
    }
    return res
};
