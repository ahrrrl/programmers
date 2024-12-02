function solution(a, d, included) {
    let result = 0
    included.forEach((v,i) => {if(v) result += a+(i)*d})
    return result
}