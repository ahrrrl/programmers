function solution(array) {
    var answer = 0;
    const newArray = array.sort((a, b) => a - b);
    answer = newArray[(newArray.length-1)/2]
    return answer;
}