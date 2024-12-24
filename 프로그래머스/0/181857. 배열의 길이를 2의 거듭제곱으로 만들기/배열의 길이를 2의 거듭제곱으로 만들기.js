function solution(arr) {
    let n = 0
    const cul = (arr) => {
        const num = arr.length
        if(num === 2**n){
            return arr
        }else if(num > 2**n && num < 2**(n+1)){
            const postArr = Array.from({length:2 ** (n + 1) - num}).fill(0)
            return [...arr, ...postArr]
        }else{
            n ++
            return cul(arr)
        }
    }
    return cul(arr)
}