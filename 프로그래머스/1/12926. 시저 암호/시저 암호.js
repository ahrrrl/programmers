function solution(s, n) {
    return s.split('').map(char => {
        if (char === ' ') return ' '; // 공백은 그대로 반환
        
        const code = char.charCodeAt(0);
        let shiftedCode;
        
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            // 대문자 (65-90) 또는 소문자 (97-122)
            const base = code < 97 ? 65 : 97;
            shiftedCode = (code - base + n) % 26 + base;
        } else {
            // 알파벳이 아닌 경우 그대로 반환
            return char;
        }
        
        return String.fromCharCode(shiftedCode);
    }).join('');
}