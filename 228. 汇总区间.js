/**
 * @param {number[]} nums
 * @return {string[]}
 * 从数组的位置 000 出发，向右遍历。每次遇到相邻元素之间的差值大于 111 时，我们就找到了一个区间。遍历完数组之后，就能得到一系列的区间的列表。
 */
var summaryRanges = function(nums) {
    let ret = [],i=0,n=nums.length
    while(i<n){
        const low = i
        i++
        while(i<n && nums[i] === nums[i-1]+1){
            i++
        }
        const high = i-1
        const temp = [''+nums[low]]
        if(low < high){
            temp.push('->')
            temp.push(''+nums[high])
        }
        ret.push(temp.join(''))
    }
    return ret
};
