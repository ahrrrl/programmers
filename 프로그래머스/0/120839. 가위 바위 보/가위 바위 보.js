function solution(rsp) {
    let answer ='';
    const arr = rsp.split('');
    for (x of arr) {
      switch(x){
          case '2':
          answer += '0'
          break;
          case '0':
          answer += '5'
          break;
          case '5':
          answer += '2'
          break;   
      }
    }
   
    return answer;
}