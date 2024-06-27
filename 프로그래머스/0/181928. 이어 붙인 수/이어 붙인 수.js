function solution(num_list) {
    let a = ''
    let b = ''
    for(num of num_list){
        
        if(num % 2 === 0) {
            a += num.toString()
        } else {
            b += num.toString()
        }
    }
    return parseInt(a) + parseInt(b);
}