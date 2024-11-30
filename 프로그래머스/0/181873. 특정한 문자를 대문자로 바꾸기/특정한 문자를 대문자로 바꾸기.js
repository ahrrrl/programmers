function solution(my_string, alp) {
   return my_string.split('').map((v)=> v === alp ? v.toUpperCase() : v).join('')
}