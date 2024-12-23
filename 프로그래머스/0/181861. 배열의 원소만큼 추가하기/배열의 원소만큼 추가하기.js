function solution(arr) {
    return arr.reduce((acc,cur) => {
        const newArr = Array.from({length: cur}).fill(cur)
        return [...acc, ...newArr]
    },[])
}