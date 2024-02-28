/**
 * @param {number[]} nums
 * @param {number[]} changeIndices
 * @return {number}
 */
const earliestSecondToMarkIndices = function (nums, changeIndices) {
    const n = nums.length;
    const m = changeIndices.length;
    let left = -1, right = m + 1
    const check = (maxDay) => {
        let slow = n; // 慢速复习+考试所需天数
        for (let v of nums) {
            slow += v;
        }
        const lastExamDay = new Array(n).fill(-1);
        for (let day = m - 1; day >= 0; day--) {
            lastExamDay[changeIndices[day] - 1] = day
        }
        let pq = [];
        let cnt = 0;
        for (let t = maxDay - 1; t >= 0; t--) {
            let i = changeIndices[t] - 1
            let v = nums[i]
            if (v <= 1 || t !== lastExamDay[i]) {
                cnt++
                continue;
            }
            if (cnt === 0) {
                if (!pq.length || v <= pq[0]) {
                    cnt++
                    continue;
                }
                slow += pq.shift() + 1
                cnt += 2;
            }
            slow -= v + 1
            cnt--
            pq.push(v)
            pq.sort((a, b) => a - b)
        }
        return cnt >= slow
    }
    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left
        if (check(mid)) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return left > m ? -1 : left;
};
