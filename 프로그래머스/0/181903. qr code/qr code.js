function solution(q, r, code) {
    return code.split('').reduce((acc, cur, i) => i % q === r ? acc += cur : acc, '')
}