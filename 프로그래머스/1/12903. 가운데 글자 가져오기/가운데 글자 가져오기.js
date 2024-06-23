function solution(s) {
    const arr = s.split('')
    if(arr.length % 2 ===0){
        return arr[arr.length / 2 -1] + arr[arr.length / 2]
    } else {
        return arr[(arr.length-1) / 2 ]
    }
}