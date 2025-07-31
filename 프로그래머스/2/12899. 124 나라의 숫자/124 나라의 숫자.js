function solution(n) {
    const nationMap = [4, 1, 2]; // 0 → 4, 1 → 1, 2 → 2
    let result = '';

    while (n > 0) {
        const remainder = n % 3;
        n = Math.floor((n - 1) / 3);  // 나머지가 0일 때 조정

        result = nationMap[remainder] + result;
    }

    return result;
}