function solution(n) {
    let count = 0;
    let doubleN = 2 * n;

    for (let k = 1; k * (k + 1) / 2 <= n; k++) {
        if (doubleN % k === 0) {
            const a = (doubleN / k - k + 1) / 2;
            if (a > 0 && Number.isInteger(a)) {
                count++;
            }
        }
    }

    return count;
}