/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let ans = 0
    let newWord = word
    while(sequence.indexOf(newWord) > -1){
        ans++
        newWord = newWord + word
    }
    return ans
};
