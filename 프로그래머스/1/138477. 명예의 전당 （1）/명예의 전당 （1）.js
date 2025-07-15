function solution(k, score) {
    const legendBoard = [];
    const answer = [];
    for (num of score) {
        legendBoard.push(num);
        legendBoard.sort((a,b) => b - a);
        if(legendBoard.length > k) {
            legendBoard.pop();
        }
        answer.push(legendBoard[legendBoard.length - 1]);
    }
    return answer;
}