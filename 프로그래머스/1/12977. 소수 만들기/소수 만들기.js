function solution(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let z = j + 1; z < nums.length; z++) {
                const sum = nums[i] + nums[j] + nums[z];
                let isSosu = true;
                for(let k = 2; k <= Math.sqrt(sum); k++) {
                    if(sum % k === 0) {
                        isSosu = false;
                        break;
                    }
                    
                }

                if(isSosu) {
                   result++;
                }
            }
        }
    }
    return result;
}