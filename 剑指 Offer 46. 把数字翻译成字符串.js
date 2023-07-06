/**
 * @param {number} num
 * @return {number}
 * 递归方法--pointer指针从0开始 获取pointer和pointer+1的两位数
 * 判断是否在10和25范围内
 * 如果是的话 会有两种可能 翻译一个数(走一步)和翻译两个数(走两步)
 * 如果不是的话 翻译一个数(走一步)
 */
var translateNum = function (num) {
    const str = num.toString()
    const dfs = (str, pointer) => {
        if (pointer >= str.length - 1) return 1
        const temp = Number(str[pointer] + str[pointer + 1])
        if (temp >= 10 && temp <= 25) {
            return dfs(str, pointer + 1) + dfs(str, pointer + 2)
        } else {
            return dfs(str, pointer + 1)
        }
    }
    return dfs(str, 0)
};
