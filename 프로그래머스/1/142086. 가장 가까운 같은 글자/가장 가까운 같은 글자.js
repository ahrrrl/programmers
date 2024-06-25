function solution(s) {
    const answer = [];
    for (let i = 0; i < s.length; i++) {
        const lastIndex = s.slice(0, i).lastIndexOf(s[i]);
        answer.push(lastIndex === -1 ? -1 : i - lastIndex);
    }
    return answer;
}