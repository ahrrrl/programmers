function solution(n) {
    const binary = n.toString(2);
    const oneLength = binary.split('').filter(v => v === '1').length;
    let bigOneLength = Infinity;
    let bigOneBinary = 0;
    while(oneLength !== bigOneLength) {
        n++
        bigOneBinary = n.toString(2);
        bigOneLength = bigOneBinary.split('').filter(v => v === '1').length;
       
    }
    return parseInt(bigOneBinary, 2);
    
    // 이진수를 (n.toString(2).match(/1/g) || []).length; 를 통해 1 카운트 가능
    // 따라서 bigOneBinary를 굳이 2진수 문자열로 만들 필요가 없음
    
    // 추가로 비트연산을 하면 시간 복잡도 개선 가능
}