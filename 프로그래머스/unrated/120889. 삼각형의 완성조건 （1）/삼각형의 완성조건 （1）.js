function solution(sides) {
    const sortSides = sides.sort((a, b) => (a-b));
    sortSides[2] < sortSides[0] + sortSides[1] ? answer=1 : answer=2;
    return answer;
}