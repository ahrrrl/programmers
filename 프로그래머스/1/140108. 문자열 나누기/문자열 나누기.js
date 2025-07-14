function solution(s) {
    let count = 0;
    let same = 0;
    let diff = 0;
    let firstChar = '';

    for (let i = 0; i < s.length; i++) {
        if (same === 0 && diff === 0) {
            firstChar = s[i];
        }

        if (s[i] === firstChar) {
            same++;
        } else {
            diff++;
        }

        if (same === diff) {
            count++;
            same = 0;
            diff = 0;
        }
    }

    if (same !== 0 || diff !== 0) {
        count++;
    }

    return count;
}