/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 双指针 左右指针相加 如果大于target 右指针向左移 小于左指针向右移 相等则返回
 */
var twoSum = function(nums, target) {
    let left = 0
    let right = nums.length -1
    while(left < right){
        if(nums[left]+ nums[right] > target){
            right --
        }else if(nums[left]+ nums[right] < target){
            left ++
        }else{
            return [nums[left],nums[right]]
        }
    }
    return null
};
