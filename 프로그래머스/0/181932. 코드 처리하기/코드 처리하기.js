function solution(code) {
    let mode = 0;  // mode를 0으로 초기화
    let ret = '';  // ret 변수명 사용
    
    for (let idx = 0; idx < code.length; idx++) {
        if (code[idx] === '1') {
            mode = 1 - mode;  // mode를 0과 1 사이로 토글
            continue;
        }
        
        if (mode === 0 && idx % 2 === 0) {
            ret += code[idx];
        } else if (mode === 1 && idx % 2 === 1) {
            ret += code[idx];
        }
    }
    
    return ret === '' ? 'EMPTY' : ret;
}