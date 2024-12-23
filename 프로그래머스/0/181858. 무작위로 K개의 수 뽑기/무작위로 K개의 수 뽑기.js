function solution(arr, k) {
     const uniqueArr = [...new Set(arr)];  
    return Array.from({ length: k }, (_, index) => {
        return index < uniqueArr.length ? uniqueArr[index] : -1;
    });
}