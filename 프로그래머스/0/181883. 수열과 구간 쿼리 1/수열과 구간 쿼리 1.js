function solution(arr, queries) {
    for(const query of queries){
        for(let key = query[0]; key <= query[1]; key++){
            arr[key] += 1;
        }
    }
    return arr
}