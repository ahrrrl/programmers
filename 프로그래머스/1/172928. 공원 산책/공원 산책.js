function solution(park, routes) {
    const NESW = {
        N: [-1, 0],
        E: [0,1],
        S: [1,0],
        W: [0, -1]
    }
    const parkMap = Array.from(park, row => [...row]);
    const colMax = parkMap.length
    const rowMax = parkMap[0].length
    const mappingRoute = routes.map(v => v.split(' '))
    const findStart = (arr) => {
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr[i].length; j++){
                if(arr[i][j] === 'S') return [i, j]
            }
        }
    }
    const curPosition = findStart(parkMap)
    for(const route of routes) {
        const [way, num] = route.split(' ')
        const number = Number(num);
        const [dy, dx] = NESW[way];
        let canMove = true
        for (let i = 1; i <= number; i++) {
            const ty = curPosition[0] + dy * i;
            const tx = curPosition[1] + dx * i;
            
            if(tx < 0 || ty < 0 || tx >= rowMax || ty >= colMax) {
                console.log('무빙안함')
                canMove =false;
                break;
            }
            
            if(parkMap[ty][tx] === 'X') {
                canMove = false;
                break;
            }
        }
        if (canMove) {
            console.log('dy:' + dy + 'dx:' + dx)
            console.log('무브함' + number)
            curPosition[0] += dy * number;
            curPosition[1] += dx * number;
        }
        
    }
    
    return curPosition
}