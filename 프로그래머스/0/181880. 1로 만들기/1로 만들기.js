function solution(num_list) {
    return num_list.reduce((acc, cur) => {
        let count = 0;
        let num = cur;
        
        while (num !== 1) {
            if (num % 2 === 0) {
                num = num / 2;
            } else {
                num = (num - 1) / 2;
            }
            count++;
        }
        
        return acc + count;
    }, 0);
}