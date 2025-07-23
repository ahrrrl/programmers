function solution(ingredient) {
    // 매번 패턴 하나 제거 후 다시 처음부터 탐색 -> 배열이 크면 재귀가 깊어져 스택 오버플로우 발생
    // const func = (arr) => {
    //     for (let i = 0; i < arr.length - 3; i++) {
    //         if(arr[i] === 1 && arr[i+1] === 2 && arr[i+2] === 3 && arr[i+3] === 1) {
    //             const newArr = [...arr.slice(0, i), ...arr.slice(i+4)];
    //             return 1 + func(newArr)
    //         }
    //     }
    //     return 0
    // }
    // return func(ingredient);
    
    const stack = [];
    let count = 0;
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        const len = stack.length;
        
        if(len >= 4 && 
           stack[len - 4] === 1 && 
           stack[len - 3] === 2 && 
           stack[len - 2] === 3 && 
           stack[len - 1] === 1
          ) {
            stack.splice(len -4, 4);
            count++;
        }
    }
    return count;
}