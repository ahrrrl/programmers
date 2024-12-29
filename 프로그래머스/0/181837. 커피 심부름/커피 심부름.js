function solution(order) {
    let sum = 0
    for(let menu of order){
        if(menu.includes('cafelatte')){
            sum += 5000
        } else{
            sum += 4500
        }
    }
    return sum
}