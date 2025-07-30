function timeAdd (time, add) {
    let hour = Math.floor(time / 100);
    let minute = time % 100;
    minute += add;
    if(minute >= 60) {
        hour += Math.floor(minute / 60);
        minute = minute % 60
    }
    return hour * 100 + minute;
    
} 

function solution(schedules, timelogs, startday) {
    
    let result = schedules.length;
    for(let i = 0; i < timelogs.length; i++) {
        let toDay = startday;
        let targetTime = timeAdd(schedules[i], 10);
        for(let j = 0; j < 7; j++) {
            if(toDay === 6 || toDay === 7) {
                toDay = toDay % 7 + 1;
                continue;
            };
            
            toDay = toDay % 7 + 1;

            if(timelogs[i][j] > targetTime) {
                result--
                break;
            }
        }
    }
    return result;
}