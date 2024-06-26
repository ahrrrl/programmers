function solution(my_string, index_list) {
   return index_list.sort((a,b) => a+b).reduce((acc, cur) => acc += my_string[cur], '');
}