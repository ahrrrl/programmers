function solution(numbers) {
    const arr = Array.from({length: 10}, (v, i) => i)
    const total = arr.reduce((acc, cur)=> acc+cur)
    return total - numbers.reduce((acc,cur)=> acc +cur)
}