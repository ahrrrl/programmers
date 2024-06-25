function solution(s) {
    return s.split(' ').map((str)=> str.split('').map((v,i) => i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()).join('') ).join(' ')
}