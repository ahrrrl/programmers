function solution(myString, pat) {
    let count = 0;
    const cul = (myString, pat) => {
        const index = myString.indexOf(pat);
        if (index !== -1) {
            count++;
            return cul(myString.slice(index + 1), pat);
        }
        return count;
    };
    return cul(myString, pat);
}