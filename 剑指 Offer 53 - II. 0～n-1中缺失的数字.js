/**
 * @param {number[]} nums
 * @return {number}
 * 二分查找 
 */
var missingNumber = function(nums) {
    const length = nums.length
    let left = 0
    let right = length - 1
    let res = length
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid] === mid){
            left = mid + 1
        }else{
            res = mid
            right = mid -1
        }
    }
    return res
};
