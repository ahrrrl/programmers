function solution(my_string) {
      var answer = 0;
    my_string.match(/\d/g).forEach((x)=> answer +=Number(x));
  
    return answer;
}