function solution(d, budget) {
    let result = 0;
    const sortedD = d.sort((a, b) => a - b);
    for (const bill of sortedD) {
        budget -= bill;
        if(budget < 0) {
            break;
        }
        result++;
        
    }
    return result;
}