function solution(video_len, pos, op_start, op_end, commands) {
    const transN = (x) => {
        const [m, s] = x.split(":").map(Number);
        const totalS = m * 60 + s;
        return totalS
    }
    const transS = (x) => {
        const minutes = Math.floor(x / 60);
        const seconds = x % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
    const posTime = transN(pos);
    const op_startTime = transN(op_start);
    const op_endTime = transN(op_end);
    const video_lenTime = transN(video_len);
    let time = pos
    
    for (command of commands){
        if(transN(time) >= op_startTime && transN(time) <= op_endTime){
        time = op_end
    }
        switch(command){
            case 'prev':
                time = transS(Math.max(0, transN(time) - 10))
                break
            case 'next':
                time = transS(Math.min(video_lenTime, transN(time)  + 10))
                break
        }
              if(transN(time) >= op_startTime && transN(time) <= op_endTime){
        time = op_end
    }
    } 
    
    
   
    return time
}