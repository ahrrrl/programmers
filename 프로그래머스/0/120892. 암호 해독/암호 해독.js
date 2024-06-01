function solution(cipher, code) {
    var answer = '';
    cipher.split('').forEach((value,i)=> (i+1) % code === 0 ? answer += value : null);
    return answer;
}