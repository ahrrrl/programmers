function solution(s){
    const stack = [];
    for (const char of s) {
        if(char === '(') {
            stack.push(char);
        } else {
            const top = stack.pop();
            if(top !== '(') return false;
        }
    }
    
    return stack.length === 0;
   
}