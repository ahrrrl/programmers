function solution(begin, end) {
    const result = [];

    for (let i = begin; i <= end; i++) {
        if (i === 1) {
            result.push(0);
            continue;
        }

        let maxDivisor = 1;

        for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
            if (i % j === 0) {
                const pair = i / j;
                if (pair <= 10000000) {
                    maxDivisor = Math.max(maxDivisor, pair);
                    break; // 가장 큰 약수를 먼저 찾으면 끝냄
                }
                if (j <= 10000000) {
                    maxDivisor = Math.max(maxDivisor, j);
                }
            }
        }

        result.push(maxDivisor);
    }

    return result;
}