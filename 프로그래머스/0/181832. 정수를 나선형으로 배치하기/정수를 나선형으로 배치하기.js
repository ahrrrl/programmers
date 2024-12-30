function solution(n) {
    // n x n 크기의 배열 초기화
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    
    // 4방향: 오른쪽, 아래쪽, 왼쪽, 위쪽
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    let currentDirection = 0; // 초기 방향은 오른쪽
    let row = 0, col = 0; // 시작 위치는 (0, 0)
    let value = 1; // 채울 값 초기화
    
    while (value <= n * n) {
        result[row][col] = value++; // 현재 위치에 값 채우기
        
        // 다음 위치 계산
        const nextRow = row + directions[currentDirection][0];
        const nextCol = col + directions[currentDirection][1];
        
        // 다음 위치가 배열의 경계를 벗어나거나 이미 채워진 곳이면 방향 전환
        if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || result[nextRow][nextCol] !== 0) {
            // 방향 전환
            currentDirection = (currentDirection + 1) % 4;
        }
        
        // 실제로 이동
        row += directions[currentDirection][0];
        col += directions[currentDirection][1];
    }
    
    return result;
}