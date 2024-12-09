function solution(a, b, c, d) {
    const dice = [a, b, c, d];
    
    // 주사위 빈도 계산
    const counts = {};
    dice.forEach(num => counts[num] = (counts[num] || 0) + 1);
    
    // 숫자와 빈도 분리
    const values = Object.keys(counts).map(Number); // 숫자 배열
    const frequencies = Object.values(counts); // 빈도 배열

    // 조건에 따른 점수 계산
    if (frequencies.length === 1) {
        // 네 숫자가 모두 같음
        return 1111 * values[0];
    } else if (frequencies.length === 2) {
        if (frequencies.includes(3)) {
            // 세 개가 같음
            const p = values[frequencies.indexOf(3)];
            const q = values[frequencies.indexOf(1)];
            return Math.pow(10 * p + q, 2);
        } else {
            // 두 쌍의 숫자가 같음
            const [p, q] = values;
            return (p + q) * Math.abs(p - q);
        }
    } else if (frequencies.length === 3) {
        // 두 개가 같음 + 나머지 두 개가 다름
        const p = values[frequencies.indexOf(2)];
        const others = values.filter(v => v !== p);
        return others[0] * others[1];
    } else {
        // 모든 숫자가 다름
        return Math.min(...values);
    }
}