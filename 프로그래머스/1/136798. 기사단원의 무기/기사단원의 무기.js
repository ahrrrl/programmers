function solution(number, limit, power) {
    let totalWeight = 0;
    for (let i = 1; i <= number; i++) {
        let damage = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if(i % j === 0) {
                damage++;
                if(j !== i/j) {
                    damage++;
                }
            }
            if(damage > limit) {
                damage = power;
                break;
            }
        }
        totalWeight += damage;
    }
    return totalWeight;
}