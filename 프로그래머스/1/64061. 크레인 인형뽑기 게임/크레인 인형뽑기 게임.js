function solution(board, moves) {
    const basket = [];
    let score = 0;
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i] - 1] && board[j][moves[i] - 1] !== 0) {
                basket.push(board[j][moves[i] - 1])
                board[j][moves[i] - 1] = 0;
                
                break;
            }
        }
        
        if(basket.length > 1 && basket[basket.length - 1] === basket[basket.length - 2]) {
            basket.pop()
            basket.pop()
            score += 2;
        }
        
    }
    
    return score;
    
}