function solution(N, stages) {
    const stagesMap = new Map();
    for (let i = 0; i < stages.length; i++) {
        if(stagesMap.has(stages[i])) {
            stagesMap.set(stages[i], stagesMap.get(stages[i]) + 1);
        } else {
            stagesMap.set(stages[i], 1);
        }
        
    }
    
    const sumArr = [];
    for (let i = 1; i <= N + 1; i++) {
        if(stagesMap.has(i)) {
            sumArr.push(stagesMap.get(i));
        } else {
            sumArr.push(0);
        }
    }
    
    const reSumArr = sumArr.reverse();
    let sum = 0;
    const inStagesCounts = [];
    for (let i = 0; i < sumArr.length; i++) {
        sum += reSumArr[i];
        inStagesCounts.push(sum);    
    }
    
    const result = [];
    for (let i = 0; i < N; i++) {
        result.push([i + 1, (stagesMap.has(i + 1) ? stagesMap.get(i + 1) : 0) / inStagesCounts[N - i]])
        
    }

    return result.sort((a, b) => b[1] - a[1]).map(([a, _]) => a)
   
}