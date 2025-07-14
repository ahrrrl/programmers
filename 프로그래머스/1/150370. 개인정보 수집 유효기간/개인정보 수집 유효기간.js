function solution(today, terms, privacies) {
    const termsMap = new Map(terms.map(v => v.split(' ')));
    const todayDate = new Date(today);
    const result = [];
    
    for (let i = 1; i <= privacies.length; i++) {
        let [date, term] = privacies[i-1].split(' ');
        date = new Date(date);
        term = parseInt(termsMap.get(term));
        
        console.log(term)
        date.setMonth(date.getMonth() + term);
        console.log(date)
        if(todayDate >= date) {
            result.push(i);
        }
    }
    return result;
}