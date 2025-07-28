function solution(answers) {
    // 1번 5반복 2번 8반복 3번 10반복 40 공배수
    const arr1 = Array.from({length: answers.length}, (_, i) => (i) % 5 + 1);
    const arr2 = Array.from({length: answers.length})
    const arr3 = Array.from({length: answers.length}) 
    const pattenArr2 = [1, 3, 4, 5];
    const pattenArr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let point = 0;
    for (let i = 0; i < arr2.length; i++) {
        if(i % 2 === 0) {
            arr2[i] = 2;
            continue;
        }
        arr2[i] = pattenArr2[point];
        point = (point + 1) % 4;
    }
    point = 0;
    for (let i = 0; i < arr3.length; i++) {
        arr3[i] = pattenArr3[point];
        point = (point + 1) % 10;
    }
    
    const supo = [[1, 0], [2, 0], [3, 0]];
    
    for (let i = 0; i < answers.length; i++) {
        
        if(answers[i] === arr1[i]) {
            supo[0][1] += 1;
        }
        if(answers[i] === arr2[i]) {
            supo[1][1] += 1;
        }
        if(answers[i] === arr3[i]) {
            supo[2][1] += 1;
        }
    }
    
    const sortedArr = supo.sort((a, b) => b[1] - a[1])
    const result = [];
    let firstValue = sortedArr[0][1];
    for (let i = 0; i < sortedArr.length; i++) {
        const [supo, score] = sortedArr[i];
        if(firstValue === sortedArr[i][1]) {
            result.push(sortedArr[i][0])
        }
        
    }
    return result;
}