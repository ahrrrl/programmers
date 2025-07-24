function solution(babbling) {
    const valiedBabbling = ["aya", "ye", "woo", "ma"];
    const bablingMap = new Map(Array.from({length: 4}, (_,i) => [valiedBabbling[i], i+1]));
    const result = babbling.reduce((acc, cur, i) => {
        let stringBabbling = '';
        let result = '';
        let curMapIndex;
        for (str of cur) {
            stringBabbling += str;
            if(bablingMap.get(stringBabbling)) {
                if(curMapIndex === bablingMap.get(stringBabbling)) break;
                curMapIndex = bablingMap.get(stringBabbling);
                result += stringBabbling;
                stringBabbling = '';
            }
            
            if(result === babbling[i]) {
                return acc + 1;
            }
            
        }
        return acc
    }, 0)
       
    return result;
}