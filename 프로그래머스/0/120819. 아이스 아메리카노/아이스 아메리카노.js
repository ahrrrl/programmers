function solution(money) {
    const ice = Math.floor(money / 5500);
    const ex = money % 5500;
    var answer = [];
    answer.push(ice);
    answer.push(ex);
    return answer;
}