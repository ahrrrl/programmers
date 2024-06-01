function solution(n) {
    return String(n).split('').reduce((accumulate, currentValue)=> accumulate +=Number(currentValue), 0);
}