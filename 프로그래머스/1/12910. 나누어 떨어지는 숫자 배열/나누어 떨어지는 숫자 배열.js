function solution(arr, divisor) {
    const fiterarr = arr.sort((a,b)=>a-b).filter((v)=> v % divisor === 0 )
    return fiterarr.length === 0 ? [-1] : fiterarr;
}