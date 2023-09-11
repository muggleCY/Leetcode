/**
 * @param {number[][]} courses
 * @return {number}
 * 解题参考 https://leetcode.cn/problems/course-schedule-iii/solutions/2436667/tan-xin-huan-neng-fan-hui-pythonjavacgoj-lcwp/
 * 按结束时间排序，可以保证我们优先考虑加入先结束的课程。 在课程塞满的时候，用当前的(如果耗时更短)替换耗时最长的那一个(所以使用优先队列维护时长)
 */
var scheduleCourse = function (courses) {
    courses.sort((a, b) => a[1] - b[1]) //从小到大排序
    const pq = new MaxPriorityQueue()
    let day = 0
    for (const [duration, lastDay] of courses) {
        if (day + duration < lastDay) { // 没有超过 lastDay
            day += duration
            pq.enqueue(duration)
        } else if (!pq.isEmpty() && duration < pq.front().element) { // 该课程的时间比之前的最长时间要短
            day -= pq.dequeue.element - duration
            pq.enqueue(duration)
        }
    }
    return pq.size()
};
