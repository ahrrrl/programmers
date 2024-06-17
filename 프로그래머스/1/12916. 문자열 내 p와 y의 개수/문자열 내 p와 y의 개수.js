function solution(s){
    lowerStr = s.toLowerCase();
    let ynum = 0;
    let pnum = 0;
    for (let i = 0; i < lowerStr.length; i++){
        if(lowerStr[i] === 'p') {
            pnum += 1;
        }
        if(lowerStr[i] === 'y') {
            ynum += 1;
        }
    }
    if (ynum + pnum === 0){
        return true
    }
    
    return ynum === pnum ? true : false;
}