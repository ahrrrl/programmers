function solution(n) {
    return Array(n).fill().map((v,i) => Array.from({length: n}, (val,index)=> i ===index ? 1 : 0));
}