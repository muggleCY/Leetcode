/**
 * @param {number[]} nums
 * @return {number}
 * nums数组中每个数字的各数位出现次数分别都相加起来，然后进行取模即 % 3。因为只有一个数字出现一次其他数字出现了三次，所以取3的模后只会剩下只出现一次的数字二进制的情况
 * 13:   1 1 0 1
 * 13:   1 1 0 1
 * 13:   1 1 0 1
 * 14：  1 1 1 0
 * 次数  4 4 1 3
 * 取模  1 1 1
 * 将二进制数转化为十进制数0
 */
var singleNumber = function(nums) {
    let arr = new Array(32).fill(0), i, j, len = nums.length, result = 0
    for(i = 0;i < len;i++){
        j = 0
        while(nums[i]){
            arr[j++] += nums[i] & 1
            nums[i] >>= 1
        }
    }
    for(i=0;i<32;i++){
        result += (1 << i) * (arr[i] % 3)
    }
    return result
};
