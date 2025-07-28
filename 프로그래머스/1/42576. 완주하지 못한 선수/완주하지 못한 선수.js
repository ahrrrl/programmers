function solution(participant, completion) {
    const completeMap = new Map()

    for (const name of completion) {
        if(completeMap.has(name)) {
            completeMap.set(name, completeMap.get(name) + 1);
        } else {
            completeMap.set(name, 1);
        }
        
    }
    
    for (const name of participant) {
        if(completeMap.has(name) && completeMap.get(name) > 0) {
            completeMap.set(name, completeMap.get(name) - 1)
            continue;
        }
        return name;
    }
}