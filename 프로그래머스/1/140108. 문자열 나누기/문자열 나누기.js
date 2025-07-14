function solution(s) {
    const arr = s.split('');
    console.log(arr);
    const func = (arr) => {
        if(arr.length === 0) return 0
        let result = 0
        const x = arr[0];
        let xCount = 0;
        let othersCount = 0;
        for(let i = 0; i < arr.length; i++) {       
            if(i === arr.length - 1) return 1
            if(x === arr[i]) {
                xCount++;
             }else{
                 othersCount++;
             }
            
            if(xCount === othersCount) {
                result ++
                arr.splice(0, i + 1);
                result += func(arr);
                break;
            }
            
        }
        return result 
    }
    return func(arr);
}