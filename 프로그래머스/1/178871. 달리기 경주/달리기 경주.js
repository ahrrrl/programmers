function solution(players, callings) {
    const newArr = [...players]
    const newMap = new Map(players.map((v,i) => [v, i]))
    
    for (const name of callings) {
        const curIndex = newMap.get(name);
        const prevIndex = curIndex - 1;
        const prevName = newArr[prevIndex];
        
        [newArr[prevIndex], newArr[curIndex]] = [newArr[curIndex], newArr[prevIndex]];

        newMap.set(name, prevIndex);
        newMap.set(prevName,  curIndex);
        
    }
    return newArr;

}