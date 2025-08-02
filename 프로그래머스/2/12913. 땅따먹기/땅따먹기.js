function solution(land) {
    const n = land.length;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 4; j++) {
            // 이전 행의 같은 열을 제외한 열 중 최대값을 현재 값에 더함
            land[i][j] += Math.max(
                ...land[i - 1].filter((_, idx) => idx !== j)
            );
        }
    }

    // 마지막 행에서 가장 큰 값이 정답
    return Math.max(...land[n - 1]);
}