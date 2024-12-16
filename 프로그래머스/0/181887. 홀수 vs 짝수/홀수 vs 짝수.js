function solution(num_list) {
    return Math.max(...num_list.reduce((acc,cur,i)=> {i % 2 === 0 ? acc[0] += cur : acc[1] += cur; return acc}, [0,0]))
}