function solution(str_list, ex) {
    const list_up = str_list.filter((arr) => !arr.includes(ex));
    
    return list_up.join('');
}