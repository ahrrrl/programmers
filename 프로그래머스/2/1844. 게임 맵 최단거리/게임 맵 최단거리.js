function solution(maps) {
    // 최단 경로를 구하는 문제이므로 BFS (너비 우선 탐색)을 사용하는 문제
    // (0, 0)부터 시작 (n-1, m-1) 까지 이동하는 최단 경로
    // 벽: 0, 길: 1
    const maxX = maps[0].length - 1;
    const maxY = maps.length - 1;
    
    const isVisited = Array.from({ length: maxY + 1 }, () => Array(maxX + 1).fill(false));
    isVisited[0][0] = true;
    const dX = [-1, 1, 0, 0]; // 좌우상하
    const dY = [0, 0, -1, 1];
    
    const entries = [[0, 0, 1]]; // 시작 x, y좌표 및 이동거리 (초기값) BFS탐색의 핵심 큐
    
    while(entries.length) {
        let [x, y, count] = entries.shift();
        
        if (x === maxX && y === maxY) return count;
        
        for(let i = 0; i < 4; i++) {
            const nx = x + dX[i];
            const ny = y + dY[i];
            if(nx >= 0 && nx <= maxX && 
               ny >= 0 && ny <= maxY && 
               maps[ny][nx] === 1 && !isVisited[ny][nx]
              ) {
                isVisited[ny][nx] = true;
                entries.push([nx, ny, count + 1]);
            }
        }
    }
    
    return -1
}