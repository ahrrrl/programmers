function solution(s, skip, index) {
    const result = [];
    const skipSet = new Set(skip); // skip 문자들을 Set으로 변환하여 빠른 검색
    
    for (let char of s) {
        let currentCharCode = char.charCodeAt(0);
        let count = 0;
        
        // index만큼 이동하되, skip에 포함된 문자는 제외하고 세기
        while (count < index) {
            currentCharCode++;
            
            // z를 넘어가면 a로 돌아가기
            if (currentCharCode > 122) { // 'z'의 아스키코드는 122
                currentCharCode = 97; // 'a'의 아스키코드는 97
            }
            
            const currentChar = String.fromCharCode(currentCharCode);
            
            // skip에 포함되지 않은 문자만 카운트
            if (!skipSet.has(currentChar)) {
                count++;
            }
        }
        
        result.push(String.fromCharCode(currentCharCode));
    }
    
    return result.join('');
   
}