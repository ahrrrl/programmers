
function solution(n) {
    const MOD = 1000000007;
    
    // 기저 사례
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    // 공간 최적화된 DP
    // dp[i-2], dp[i-1], dp[i] 순서
    let prev2 = 1;  // dp[1]
    let prev1 = 2;  // dp[2]
    
    for (let i = 3; i <= n; i++) {
        const current = (prev1 + prev2) % MOD;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}
