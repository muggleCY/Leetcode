/**
 * @param {number[]} nums
 * @param {number[]} changeIndices
 * @return {number}
 */
const earliestSecondToMarkIndices = function (nums, changeIndices) {
    //把nums看作考试科目列表, i: 考试科目(examId) nums[i]: 参加此项考试需要的努力值
    //把changeIndices看作考试时间表, i: 日期(day) , changeIndices[i]: 考试科目(examId)
    const n = nums.length;
    const m = changeIndices.length;
    const check = (maxDay) => {
        //lastExamDay: 每门考试最后一天考试的时间
        const lastExamDay = new Array(n).fill(-1);
        for (let day = 0; day < maxDay; day++) {
            // -1:  从 1-based 转成 0-based
            lastExamDay[changeIndices[day] - 1] = day;
        }
        //检查是否每一门考试都囊括在了 [0 - maxDay) 区间
        for (let examId = 0; examId < n; examId++) {
            const day = lastExamDay[examId]
            //当前examId没有办法在[0 - maxDay)之间安排考试
            if (day === -1) {
                return false;
            }
        }
        let cnt = 0; //cnt: 累计的努力值
        for (let day = 0; day < maxDay; day++) {
            const examId = lastExamDay.findIndex(date => date === day);
            if (examId >= 0) {
                //努力值不足，没法进行考试
                if (cnt < nums[examId]) {
                    return false;
                }
                //努力值足够， 进行考试并消耗努力值
                cnt -= nums[examId];
            } else {
                //没有考试， 累计努力值
                cnt += 1;
            }
        }

        return true;
    }
    //二分查找答案
    let left = 0, right = m + 1;
    while (left <= right) {
        //mid： 当前天数
        const mid = Math.floor((right - left) / 2) + left;
        if (check(mid)) {
            //当前天数足够应付考试, 继续压缩时间
            right = mid - 1;
        } else {
            //当前天数不足够应付考试, 放宽时间
            left = mid + 1;
        }
    }
    return left > m ? -1 : left;
};
