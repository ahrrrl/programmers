function solution(my_string) {
    return   my_string.split('').map((value)=> /^[A-Z]*$/.test(value) ? value.toLowerCase() : value.toUpperCase()).join('');
}