function solution(arr, intervals) {
    return intervals.reduce((acc, cur, i) => acc = [...acc, ...arr.slice(cur[0], cur[1]+1)], [])
}