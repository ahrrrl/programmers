function solution(myString) {
    return myString.split('').map(v=> v > 'l' ? v : 'l').join('')
}