function solution(s){
    lowerStr = s.toLowerCase();
    let yCount = 0;
    let pCount = 0;
    for (let i = 0; i < lowerStr.length; i++){
        if(lowerStr[i] === 'p') {
            pCount += 1;
        }
        if(lowerStr[i] === 'y') {
            yCount += 1;
        }
    }

    
    return yCount === pCount;
}