function solution(n) {
    return Array.from({length: n}, (v,i)=> i % 2 === 0 ? '수' : '박').join('');
}

// "수박".repeat(Math.ceil(n / 2)).slice(0, n);