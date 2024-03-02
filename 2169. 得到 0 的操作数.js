/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
    // 方法一:暴力解
    // let ans = 0
    // while (!(num1 == 0 || num2 == 0)) {
    //     if (num1 >= num2) {
    //         num1 = num1 - num2
    //     } else {
    //         num2 = num2 - num1
    //     }
    //     ans++
    // }
    // return ans

    // 方法二: 辗转相除
    // num1减num2 直到num1<num2为止 则次数为num1 / num2 剩余的num1为num1 mod num2 交换同理
    let ans = 0
    while (num1 && num2) {
        ans += Math.floor(num1 / num2)
        num1 %= num2
        let temp = num1
        num1 = num2
        num2 = temp
    }
    return ans
};
