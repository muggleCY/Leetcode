/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 1.对于连续的自然数。0,1,2,3,4,5,6,7,8，…… n-1, n
 连续异或 每4个一组，异或的结果为0
 2.进一步，所以对于一个n。前面的每4个一组皆为0了。我们只需考虑最后 n % 4个的情况
 (1) n % 4 == 0时，就 n 自己一个数   (0 ^ 1 ^ 2 ^ 3) ^ …… ^ (n-4 ^ n-3 ^ n-2 ^ n-1) ^ n = 0 ^ n = n
 (2) n % 4 == 1时，剩下 n-1 和 n 两个数 (0 ^ 1 ^ 2 ^ 3) ^ …… ^ (n-5 ^ n-4 ^ n-3 ^ n-2) ^ (n-1 ^ n) = 0 ^ (n-1 ^ n) = n-1 ^ (n-1 + 1) = 1
 (3) n % 4 == 2时，剩下n-2 n-1 和 n 三个数
 (4) n % 4 == 3时，刚好 4 个一组， 4个一组
 题目的模拟过程
 res = (start + 2 * 0) ^ (start + 2 * 1) ^ …… ^ (start + 2*（n-1）)
 (1)进一步，为了构造 0,1,2,3,4,5……n-2,n-1 连续序列
 res >> 1 = (start/2 + 0) + (start/2 + 1) + …… + (start/2 + n - 1)
 但此时要注意计算一下，最右一个bit位是0还是1
 先把(res>>1)计算出来。
 res = (res >> 1) + res最右一位
 res最右一位 == 1 当且仅当 (start % 2 == 1 && n % 2 == 1)
 (2)至此，只需要判读n的奇偶性 和 n % 4
 A = 0 ^ 1 ^ 2 ^ 3 ^ …… ^ (start/2 - 1)
 B = 0 ^ 1 ^ 2 ^ 3 ^ …… ^ (start/2 - 1) ^ (start/2 + 0) ^ (start/2 + 1) ^ …… ^ (start/2 + n - 1)
 = A ^ res
 res = A ^ (A ^ res) = A ^ B
 作者：HanXin
 链接：https://leetcode.cn/problems/xor-operation-in-an-array/solutions/761781/cpython3-fa-1mo-ni-fa-2shu-xue-by-hanxin-w5ec/
 来源：力扣（LeetCode）
 */
var xorOperation = function(n, start) {
    let s = start >> 1, e = n & start & 1;
    let ret = sumXor(s - 1) ^ sumXor(s + n - 1);
    return ret << 1 | e;
};

const sumXor = (x) => {
    if (x % 4 === 0) {
        return x;
    }
    if (x % 4 === 1) {
        return 1;
    }
    if (x % 4 === 2) {
        return x + 1;
    }
    return 0;
}
