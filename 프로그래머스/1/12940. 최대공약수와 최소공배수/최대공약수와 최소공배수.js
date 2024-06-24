function solution(n, m) {
    const arr=[];
    function gcd(a, b) {
    // b가 0이 될 때까지 반복해서 나머지 연산을 수행합니다.
    while (b !== 0) {
        let temp = a % b;
        a = b;
        b = temp;
    }
    // 최종적으로 a가 최대 공약수가 됩니다.
    return a;
}
    function lcm(a, b) {
    // 두 수의 곱을 최대 공약수로 나누어 최소 공배수를 구합니다.
    return (a * b) / gcd(a, b);
}
    arr[0] = gcd(n,m)
    arr[1] = lcm(n,m)   
    return arr
}