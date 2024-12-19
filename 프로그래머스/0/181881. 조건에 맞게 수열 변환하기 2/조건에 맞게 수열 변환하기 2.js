function solution(arr) {
    let num = 0;

    const cal = (currentArr) => {
        num++;
        const newArr = currentArr.map((v) => {
            if (v >= 50 && v % 2 === 0) {
                return v / 2;
            } else if (v < 50 && v % 2 !== 0) {
                return v * 2 + 1;
            } else {
                return v;
            }
        });

     
        if (JSON.stringify(newArr) === JSON.stringify(currentArr)) {
            return num-1; 
        } else {
            return cal(newArr);
        }
    };

    return cal(arr);
}