function solution(phone_number) {
    return Array.from({length: phone_number.length-4}, (v,i)=> '*').join('') + phone_number.slice(-4);
  
}