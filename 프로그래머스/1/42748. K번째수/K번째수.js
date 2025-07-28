function solution(array, commands) {
    const result = [];
    for (command of commands) {
        const [i, j, k] = command;
        const sliced = array.slice(i - 1, j).sort((a, b) => a - b);
        result.push(sliced[k - 1])
    }
    return result;
}