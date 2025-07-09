function solution(n, m, section) {
    let paintedEnd = 0;
    let count = 0;
    for (const point of section) {
        if(point < paintedEnd) continue;
        count ++;
        paintedEnd = point + m
    }
    return count;
}