function solution(X, Y) {
    const countMap = new Map();
    const result = []
    for (const numSt of Y) {
        const num = Number(numSt);
        countMap.set(num,(countMap.get(num) || 0) + 1);
    }
    
    for (const numSt of X) {
        const num = Number(numSt);
        const preNum = countMap.get(num)
        if(countMap.has(num) && preNum > 0) {
            result.push(num);
            countMap.set(num, preNum - 1);
        }
    }
    
    result.sort((a, b) => b - a);
    if(result.length === 0) {
        return '-1';
    } else if(result[0] === 0) {
        return '0';
    } else {
        return result.join('');
    }
}