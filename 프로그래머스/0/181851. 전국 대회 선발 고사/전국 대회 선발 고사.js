function solution(rank, attendance) {
    const [aValue, bValue, cValue] = rank.filter((_,i) => attendance[i]).sort((a,b) => a-b)
    const a = rank.indexOf(aValue)
    const b = rank.indexOf(bValue)
    const c = rank.indexOf(cValue)
    return 10000 * a + 100 * b + c
}