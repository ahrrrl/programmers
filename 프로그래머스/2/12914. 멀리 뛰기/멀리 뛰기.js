function solution(n) {

    if (n === 1) return 1;
    if (n === 2) return 2;
    const MOD = 1234567;
    let prevNum = 2;
    let prevNum2 = 1;
    let sum = 0;
    for (let i = 3; i <= n; i++) {
        sum = (prevNum + prevNum2) % MOD;
        prevNum2 = prevNum;
        prevNum = sum;
    }
    return sum;
}