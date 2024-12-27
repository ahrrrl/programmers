function solution(n_str) {
    const arr = n_str.split('')
    const cul = (arr) => {
        if(arr[0] === '0'){
            return cul(arr.slice(1,arr.length))
        }
        return arr.join('')
    }
    return cul(arr)
}