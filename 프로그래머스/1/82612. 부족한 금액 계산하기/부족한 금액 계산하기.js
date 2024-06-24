function solution(price, money, count) {
    const result = Array.from({length: count}, (v,i) => (i+1) * price).reduce((acc, cur) => cur + acc);
    return result > money ? result - money : 0;
}