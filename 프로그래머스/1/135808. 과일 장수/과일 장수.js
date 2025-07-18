function solution(k, m, score) {
    const sortedScore = score.sort((a,b) => b - a);
    let result = 0;
    for (let i = 0; i < score.length; i += m) {
        if(!sortedScore[i+m-1]) break;
        const minScore = sortedScore[i + m - 1];
        if(k < minScore) {
            result += k * m;
        } else {
            result += minScore * m;
        }
   
    }
    return result;
}