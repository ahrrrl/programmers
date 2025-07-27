function solution(s) {
    const obj = {zero : 0,
                 one : 1,
                 two : 2,
                 three : 3,
                 four : 4,
                 five : 5,
                 six : 6,
                 seven : 7,
                 eight : 8,
                 nine : 9,
                };
    
    let result = '';
    let point = 0;
    let text = ''
    for (let i = 0; i < s.length; i++) {
        if(isNaN(Number(s[i]))) {
            text += s[i];
            if(obj.hasOwnProperty(text)) {
                result += obj[text];
                text = '';
            }
            continue;
        } else {
            result += s[i]
        }
        
    }
    return Number(result);
}