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
    
}