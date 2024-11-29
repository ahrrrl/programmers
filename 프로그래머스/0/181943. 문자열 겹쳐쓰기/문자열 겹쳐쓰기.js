function solution(my_string, overwrite_string, s) {
    const newString = my_string.split('')
    newString.splice(s, overwrite_string.length, overwrite_string);
    return newString.join('')
}