function solution(a, b) {
    if (a>b){
        [a,b] = [b,a]
    }
    return Array.from({length: b-a+1}, (v, i) => a+i).reduce((acc, cur) => cur+acc , 0);
}

// 등차 수열을 사용 가능
/*

a 첫째항
l 마지막 항
n 전체 항의 수

공식 S = (a + l) * n / 2


**/