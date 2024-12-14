function solution(my_string) {
     const result = new Array(52).fill(0);
    
    for (const char of my_string) {
        if (char >= 'A' && char <= 'Z') {
            // 대문자의 경우 ASCII 코드로 변환 후 0~25로 매핑
            result[char.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        } else if (char >= 'a' && char <= 'z') {
            // 소문자의 경우 ASCII 코드로 변환 후 26~51로 매핑
            result[char.charCodeAt(0) - 'a'.charCodeAt(0) + 26]++;
        }
    }
    
    return result;
}