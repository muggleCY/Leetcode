/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function (arr1, arr2) {
    const map = new Map()
    for (let i = 0; i < arr1.length; i++) {
        map.set(arr1[i], !map.get(arr1[i]) ? 1 : map.get(arr1[i]) + 1)
    }
    const res = []
    const temp = []
    for (let i = 0; i < arr2.length; i++) {
        if (map.has(arr2[i])) {
            let count = map.get(arr2[i])
            for (let j = 0; j < count; j++) {
                res.push(arr2[i])
            }
            map.delete(arr2[i])
        }
    }
    for (const [key, value] of map) {
        for (let i = 0; i < value; i++) {
            temp.push(key)
        }
    }
    return [...res, ...temp.sort((a, b) => a - b)]
};
