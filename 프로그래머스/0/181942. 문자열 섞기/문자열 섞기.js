function solution(str1, str2) {
   return str1.split('').reduce((acc,cur,i) => acc + cur + str2[i], '')
}