function solution(arr) {
    const colLength = arr[0].length
    const rowLength = arr.length
    const n = Math.max(colLength, rowLength)
    if(colLength > rowLength){
        const newArr = Array(n).fill(0)
        for(let i = 0; i < colLength - rowLength; i++){
            arr.push(newArr)
        }
    }else if(colLength < rowLength){
        const newArr = Array(rowLength-colLength).fill(0)
        arr = arr.map(v => [...v, ...newArr])
    }
    return arr
}