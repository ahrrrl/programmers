function solution(picture, k) {
    const arr = []
    for(let str of picture){
        const newStr = str.split('').reduce((acc,cur) => {
           for(let i = 0; i < k; i++){
                acc += cur
           } 
            return acc
        },'')
        for(let i = 0; i < k; i++){
            arr.push(newStr)
        }
    }
    return arr
}