function solution(n, k) {
    let discountCount = n/10;
    return  n * 12000 + (k - Math.floor(discountCount)) * 2000;
}