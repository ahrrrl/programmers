function solution(n) {
    
    return Array.from({ length: Math.floor(n / 2) }, (v, i) => i + 1).reduce((acc, cur) => n % cur === 0 ? acc + cur : acc, 0) + n;
}