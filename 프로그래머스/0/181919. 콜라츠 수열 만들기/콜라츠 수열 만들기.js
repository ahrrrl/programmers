function solution(n) {
    const arr =[]
    const cal = (num) => {
        arr.push(num)
        if(num===1) return
        if(num % 2 === 0){
            num /= 2 
        }else{
            num = 3*num+1
        }
        cal(num)
    }
    cal(n)
    return arr
}