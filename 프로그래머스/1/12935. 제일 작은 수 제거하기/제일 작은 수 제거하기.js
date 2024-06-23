function solution(arr) {
    const minIndex = arr.indexOf(Math.min(...arr));
    arr.splice(minIndex, 1);
    return arr.length === 0 ? [-1]: arr;
}