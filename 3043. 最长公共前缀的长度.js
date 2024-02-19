/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
const longestCommonPrefix = function (arr1, arr2) {
    let set = new Set(), max = 0
    for (let i = 0; i < arr2.length; i++) {
        let temp = arr2[i].toString()
        for (let j = 1; j <= temp.length; j++) {
            set.add(temp.substring(0, j))
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        let temp = arr1[i].toString()
        for (let j = 1; j <= temp.length; j++) {
            if (set.has(temp.substring(0, j))) {
                max = Math.max(max, j)
            }
        }

    }
    return max
};

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
const longestCommonPrefix1 = function (arr1, arr2) {
    let set = new Set(), max = 0
    for (let i = 0; i < arr2.length; i++) {
        let temp = arr2[i]
        while (temp > 0) {
            set.add(temp)
            temp = Math.floor(temp / 10)
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        let temp = arr1[i]
        while (temp > 0 && !set.has(temp)) {
            temp = Math.floor(temp / 10)
        }
        max = Math.max(max, temp)
    }
    return max === 0 ? 0 : max.toString().length
};
