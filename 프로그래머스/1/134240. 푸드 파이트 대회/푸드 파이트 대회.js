function solution(food) {
    const foods = food.reduce((acc, cur, index) => {
        if(index === 0) return ''
        
        return acc += String(index).repeat(Math.floor(cur/2));
    },'')
    const reversed = foods.split('').reverse().join('');
    return foods + 0 + reversed;
}