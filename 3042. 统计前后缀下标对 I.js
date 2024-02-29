/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
    let num = 0
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            // let n = words[i].length
            // let m = words[j].length
            // if (n <= m) {
            //     let str1 = words[j].slice(0, n)
            //     let str2 = words[j].slice(-n)
            //     if (str1 == words[i] && str2 == words[i]) {
            //         num++
            //     }
            // }
            if (words[i].length <= words[j].length &&
                words[j].startsWith(words[i]) &&
                words[j].endsWith(words[i])) {
                num++;
            }
        }
    }
    return num
};
