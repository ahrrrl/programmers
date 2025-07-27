function solution(new_id) {
    const regex = /^[a-zA-Z0-9_.-]$/;
    const lowerId = new_id.toLowerCase();
    const removedStrArr = lowerId.split('').filter(v => regex.test(v));
    const removedDot = [];

    for (let i = 0; i < removedStrArr.length; i++) {
        if(removedDot[removedDot.length - 1] === '.' && 
           removedStrArr[i] === '.' ||
           removedDot.length === 0 &&
           removedStrArr[i] === '.') continue;
        removedDot.push(removedStrArr[i])
    }
    const removedSpace = removedDot.map(v => v === ' ' ? 'a' : v);
    if(removedSpace.length === 0) removedSpace.push('a');
    const vailedRange = removedSpace.length > 15 ? removedSpace.slice(0, 15) : removedSpace;
   
    if(vailedRange[vailedRange.length - 1] === '.') {
        vailedRange.pop()
    }
    
    while(vailedRange.length < 3) {
        vailedRange.push(vailedRange[vailedRange.length - 1]);
    }
    console.log(vailedRange)
    return vailedRange.join('');
}