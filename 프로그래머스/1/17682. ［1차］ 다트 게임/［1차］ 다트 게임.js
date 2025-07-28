function solution(dartResult) {
    // 답봄
    const regex = /(\d{1,2})([SDT])([*#]?)/g;
    const rounds = [...dartResult.matchAll(regex)];

    const scores = [];

    for (let i = 0; i < rounds.length; i++) {
        let [_, num, bonus, option] = rounds[i];
        num = Number(num);

        // 보너스 처리
        if (bonus === 'D') num = num ** 2;
        else if (bonus === 'T') num = num ** 3;

        // 옵션 처리
        if (option === '*') {
            num *= 2;
            if (i > 0) scores[i - 1] *= 2;
        } else if (option === '#') {
            num *= -1;
        }

        scores.push(num);
    }

    return scores.reduce((a, b) => a + b, 0);
}