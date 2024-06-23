function solution(absolutes, signs) {
    return absolutes.map((v,i) => signs[i] ? v : -v).reduce((acc, cur) => cur + acc, 0);
}