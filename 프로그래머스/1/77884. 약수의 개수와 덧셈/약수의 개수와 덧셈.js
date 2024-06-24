function solution(left, right) {
    let sum = 0;
    for (i = left; i <= right; i++){
        const filterArr = Array.from({length: i}, (_, i)=> i+1).filter((v)=> i % v === 0);
        filterArr.length % 2 === 0 ? sum += i : sum -=i;
    }
    return sum;
}