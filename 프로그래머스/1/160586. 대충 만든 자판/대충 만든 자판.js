function solution(keymap, targets) {
    // keymap을 인덱스를 주어 매핑부터(인덱스가 누른횟수)
    // targets의 문자를 순회하며 짧은 인덱스 추출
    const result = [];
    const maped = new Map();
    for (let i = 0; i < keymap.length; i++) {
        for (let j = 0; j < keymap[i].length; j++) {
            const preValue = maped.get(keymap[i][j]);
            if(preValue) {
                if(j + 1 < preValue) {
                    maped.set(keymap[i][j], j + 1);
                }
                continue;
            }
            
            maped.set(keymap[i][j], j + 1);
        }
    }

    for (const target of targets) {
        let keyCount = 0;
        for (const key of target) {
            const keyNumber = maped.get(key);
            if(!keyNumber) {
                keyCount = -1
                break;
            }
            keyCount += keyNumber;
        }
        result.push(keyCount);
    }
    
    return result;
}