function solution(arr, queries) {
   const newArr = [];
    queries.forEach((v) => {
        const filtered = arr.slice(v[0], v[1] + 1).filter((s) => s > v[2]); 
        newArr.push(filtered.length > 0 ? Math.min(...filtered) : -1);
    });
    return newArr;
}