function solution(x) {
    return x % x.toString().split('').reduce((acc, cur)=> Number(cur) + acc, 0) === 0 ? true : false ;
 
}