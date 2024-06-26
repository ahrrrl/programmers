function solution(board) {
    // 새로운 배열을 복사해서 생성
    const newArr = board.map(row => [...row]);

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                newArr[i][j] = 1;
                if (j - 1 >= 0) newArr[i][j - 1] = 1; // 왼쪽
                if (j + 1 < board[i].length) newArr[i][j + 1] = 1; // 오른쪽
                if (i - 1 >= 0) newArr[i - 1][j] = 1; // 위
                if (i - 1 >= 0 && j - 1 >= 0) newArr[i - 1][j - 1] = 1; // 왼쪽 위
                if (i - 1 >= 0 && j + 1 < board[i].length) newArr[i - 1][j + 1] = 1; // 오른쪽 위
                if (i + 1 < board.length) newArr[i + 1][j] = 1; // 아래
                if (i + 1 < board.length && j - 1 >= 0) newArr[i + 1][j - 1] = 1; // 왼쪽 아래
                if (i + 1 < board.length && j + 1 < board[i].length) newArr[i + 1][j + 1] = 1; // 오른쪽 아래
            }
        }
    }

    return newArr.map(arr => arr.filter(v => v !== 1).length).reduce((acc,cur)=> acc+ cur);
}