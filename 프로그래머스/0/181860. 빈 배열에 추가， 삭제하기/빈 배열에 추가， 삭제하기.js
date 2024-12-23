function solution(arr, flag) {
    return arr.reduce((acc, cur,i) => flag[i] ? [...acc, ...Array.from({ length: cur * 2 }).fill(cur)] :acc.slice(0, -cur),[])
}