function solution(n, w, num) {
    const totalRows = Math.ceil(n / w); // 전체 층 수
    const row = Math.floor((num - 1) / w); // num이 위치한 층
    let col;

    if (row % 2 === 0) {
        // 왼→오 방향
        col = (num - 1) % w;
    } else {
        // 오←왼 방향
        col = w - 1 - ((num - 1) % w);
    }

    let count = 0;
    // 현재 층부터 위로 올라가며 col에 상자 있으면 카운트
    for (let r = row; r < totalRows; r++) {
        const startBoxNumber = r * w + 1;
        const endBoxNumber = Math.min((r + 1) * w, n);
        const widthOfRow = endBoxNumber - startBoxNumber; // 실제 너비

        if (r % 2 === 0) {
            // 왼→오: col은 그대로
            if (col <= widthOfRow) count++;
        } else {
            // 오←왼: col은 역방향
            if ((w - 1 - col) <= widthOfRow) count++;
        }
    }

    return count;
}