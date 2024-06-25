function solution(t, p) {
    const iLength = t.length - p.length + 1
    const arr = t.split('')
    let count = 0;
    for(let i = 0; i < iLength; i++){
        if(parseInt(arr.slice(i, p.length+i).join('')) <= parseInt(p)){
            count += 1;
        }
    }
    return count
}