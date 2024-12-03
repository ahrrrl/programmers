function solution(l, r) {
    const result = [];
    function generate(num) {
        if (num >= l && num <= r) {
            result.push(num);
        }
    
        if (num > r) {
            return;
        }
        
        generate(num * 10 + 0);
        generate(num * 10 + 5);
    }
    
    generate(5);
    
    if (result.length === 0) {
        return [-1];
    }
    
    return result.sort((a, b) => a - b);
}