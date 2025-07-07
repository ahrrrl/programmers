function solution(name, yearning, photo) {
    
    // name과 yearning을 매핑 
    // 매핑한걸 photo에 대입하여 점수
    
    const maped = new Map()
    const mapping = () => {
        for(let i = 0; i < name.length; i++) {
            maped.set(name[i], yearning[i])
        }
    }
    mapping();
    
    const setScore = () => {
        return photo.map(people => {
            let score = 0;
            people.map(man => {
                const addScore = maped.get(man)
                if(addScore) {
                    return score += addScore;
            }
            })
            return score
        })
    }

    const result = setScore()

  
    return result;
}