function solution(bandage, health, attacks) {
    // i 시간 담당 
    //
    const attacksSchedule = new Map(attacks);
    const maxHealth = health;
    let bandageSequence = 0;
    const timeLength = attacks[attacks.length - 1][0];
    const [healTime, heal, healBonus] = bandage
    
    for (let i = 1; i <= timeLength; i++) {
        if(attacksSchedule.has(i)) {
            health -= attacksSchedule.get(i);
            bandageSequence = 0;
            if(health <= 0) return -1;
            continue;
        }
        
        bandageSequence++;
        health += heal;
        
        if(bandageSequence === healTime) {
            health += healBonus;
            bandageSequence = 0;
        }
        
        if(health > maxHealth) {
            health = maxHealth;
        }
    }
    return health;
}