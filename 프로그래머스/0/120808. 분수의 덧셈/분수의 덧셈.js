function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + denom1 * numer2;
    let denom = denom1 * denom2;
    let maxcommon;
    function gcd(numer, denom) {
    if (denom === 0) {
        return numer; 
    };
    return gcd(denom, numer % denom);
    };
    maxcommon = gcd(numer, denom);
    return [numer/maxcommon, denom/maxcommon]
}