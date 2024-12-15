function solution(arr, query) {
    return query.reduce((acc, cur, i) => i % 2 === 0 ? acc.slice(0,query[i]+1) : acc.slice(query[i]),[...arr])
}