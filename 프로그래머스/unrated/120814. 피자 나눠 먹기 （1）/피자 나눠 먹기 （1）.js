function solution(n) {
    let pizza = 1;
    while(!(7 * pizza / n >= 1) ) {
        pizza += 1;
    }
    
    return pizza;
}