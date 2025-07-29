function solution(n, w, num) {
    const layers = [];
    const h = Math.ceil(n / w); // 총 층 수
    let box = 1;

    // 지그재그로 상자 번호 채우기
    for (let i = 0; i < h; i++) {
        const row = Array(w).fill(0);
        if (i % 2 === 0) {
            for (let j = 0; j < w && box <= n; j++) {
                row[j] = box++;
            }
        } else {
            for (let j = w - 1; j >= 0 && box <= n; j--) {
                row[j] = box++;
            }
        }
        layers.push(row);
    }

    // num의 위치 찾기
    let targetRow = -1;
    let targetCol = -1;
    for (let i = 0; i < layers.length; i++) {
        for (let j = 0; j < layers[i].length; j++) {
            if (layers[i][j] === num) {
                targetRow = i;
                targetCol = j;
                break;
            }
        }
        if (targetRow !== -1) break;
    }

    // 위로 올라가며 해당 열에 있는 상자 개수 세기
    let count = 0;
    for (let i = targetRow; i < layers.length; i++) {
        if (layers[i][targetCol] !== 0) {
            count++;
        }
    }

    return count;
}