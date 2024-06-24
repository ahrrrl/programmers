function solution(n) {
    let num = n
    let result =''
    while (num>0){
        let ex = num % 3
        result = ex + result
        num = Math.floor(num / 3) 
    }
    const Arr = result.split('')
    return Arr.reduce((acc, cur, i) => cur * 3 ** i + acc, 0);
         
}