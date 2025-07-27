function solution(survey, choices) {
    // 배열에 지표 순서대로 결과 넣기
    // survey 반복하며 같은 index의 choices를 이용해 1~3이면
    const surveyMap = new Map([['R', 0], ['T', 0], 
                               ['C', 0], ['F', 0], 
                               ['J', 0], ['M', 0], 
                               ['A', 0], ['N', 0]]);
    const socreMap = {
                    1 : 3,
                    2 : 2,
                    3 : 1,
                    4 : 0,
                    5 : 1,
                    6 : 2,
                    7 : 3,
                    }
    
    for (let i = 0; i < survey.length; i++) {
        let score ;
        const [left, right] = survey[i].split('');
        if(choices[i] < 4) {
            surveyMap.set(left, surveyMap.get(left) + socreMap[choices[i]])
        } else if(choices[i] > 4) {
            surveyMap.set(right, surveyMap.get(right) + socreMap[choices[i]])
        }
    }
    
    let result = '';
    result += surveyMap.get('T') > surveyMap.get('R') ? 'T' : 'R';
    result += surveyMap.get('F') > surveyMap.get('C') ? 'F' : 'C';
    result += surveyMap.get('M') > surveyMap.get('J') ? 'M' : 'J';
    result += surveyMap.get('N') > surveyMap.get('A') ? 'N' : 'A';
    
    return result;
    
    
    
}