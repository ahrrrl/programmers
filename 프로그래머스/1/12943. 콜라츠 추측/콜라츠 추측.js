function solution(num) {
    for (let i = 1; i < 501; ++i){
        if(num ===1){
            return 0
        }
        if (num % 2 === 0){
            num = num / 2 
            if(num === 1){
                return i
            }
        } else{
            num = num * 3 + 1
        }
    }
   return -1
}