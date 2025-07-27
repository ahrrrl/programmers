function solution(lottos, win_nums) {
    const obj = {
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6,
    }
    const viewable = lottos.filter((v) => v !== 0);
    const jokerCount = 6 - viewable.length;
    let collectCount = 0;
    for (const number of viewable) {
        if(win_nums.includes(number)) {
            collectCount += 1;
        }
    }
    const maxWin = obj[Math.min(jokerCount + collectCount, 6)];
    const minWin = obj[collectCount];
    return [maxWin, minWin]
}