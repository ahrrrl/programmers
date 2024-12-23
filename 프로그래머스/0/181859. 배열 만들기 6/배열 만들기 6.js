function solution(arr) {
    const newArr = arr.reduce((acc,cur) => cur === acc[acc.length - 1] ? acc.slice(0,acc.length - 1) : [...acc, cur],[])
    return newArr.length === 0 ? [-1] : newArr
}