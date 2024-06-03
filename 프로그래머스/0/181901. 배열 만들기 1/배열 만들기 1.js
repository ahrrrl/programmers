function solution(n, k) {
    return Array(Math.floor(n/k)).fill(k).map((num, i) => num * (1+i));
}