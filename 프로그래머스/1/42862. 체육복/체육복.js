function solution(n, lost, reserve) {
    // lost 앞쪽 인덱스부터 reserve를 탐색
    // borrowedClothes Set으로 
    // 넣기전 있는지 탐색, 없으면 넣고 있다면 뒷자리도 탐색
    
    const borrowedClothes = new Set(reserve);
    const stillLost = []
    for (lostIndex of lost) {
        if (borrowedClothes.has(lostIndex)) {
            borrowedClothes.delete(lostIndex);
            continue;
        }
        stillLost.push(lostIndex);
    }
    
    for (lostIndex of stillLost.sort((a, b) => a - b)) {
        if (borrowedClothes.has(lostIndex - 1)) {
            borrowedClothes.delete(lostIndex - 1);
        } else if (borrowedClothes.has(lostIndex + 1)) {
            borrowedClothes.delete(lostIndex + 1);
        }
    }

    return reserve.length - borrowedClothes.size + n - lost.length;
}