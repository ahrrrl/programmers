function solution(n) {
    var answer = 0;
    let num = n;
    if(num % 2 === 0) {
        while(num>0) {
            answer += num;
            num -= 2;
        }
    }
    else {
        num -= 1;
        while(num>0) {
            answer += num;
            num -= 2;
        }
    }
    return answer;
}