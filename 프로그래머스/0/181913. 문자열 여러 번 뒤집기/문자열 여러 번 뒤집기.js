function solution(my_string, queries) {
    let arr = my_string.split('')
    for(let i = 0; i < queries.length; i++){
        const before = arr.slice(0, queries[i][0])
        const reverse = arr.slice(queries[i][0], queries[i][1]+1)
        const after = arr.slice(queries[i][1]+1)
        arr = [...before, ...reverse.reverse(), ...after]
    }
    return arr.join('')
}