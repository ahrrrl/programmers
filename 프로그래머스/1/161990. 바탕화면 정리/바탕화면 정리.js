function solution(wallpaper) {
    let lux = Infinity; // 열 중에 가장 짧은 행 인덱스
    let luy = 0; // 첫파일이 있는 열 인덱스
    let rdx = 0; // 열 중에 가장 긴 행 인덱스 + 1
    let rdy = 0; // 파일이 있는 마지막열의 열 인덱스+ 1
    let isFirst = true;
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if(wallpaper[i][j] === '#') {
                if(isFirst){
                    luy = i;
                    isFirst = false;
                }
                if(j <= lux) {
                    lux = j;
                }
                if(j >= rdx) {
                    rdx = j+1;
                }
                if(i >= rdy) {
                    rdy = i+1
                }
                
            }
        }        
    }
    return [luy, lux, rdy, rdx]
}