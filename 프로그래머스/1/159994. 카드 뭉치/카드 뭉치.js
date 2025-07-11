function solution(cards1, cards2, goal) {
    // goal 을 반복 
    // cards1, 2 0인덱스 빼내어 일치하면 해당 cards shift
    let result ='Yes'
    for (word of goal) {
        if(cards1[0] === word) {
            cards1.shift();
            continue;
        }
        if(cards2[0] === word) {
            cards2.shift();
            continue;
        }
        result = 'No';
    }
    return result;
}