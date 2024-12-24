function solution(strArr) {
    const lengthCount = strArr.reduce((acc, cur) => {
        acc[cur.length] = (acc[cur.length] || 0) + 1;
        return acc;
    }, {});
    
    return Math.max(...Object.values(lengthCount));
}