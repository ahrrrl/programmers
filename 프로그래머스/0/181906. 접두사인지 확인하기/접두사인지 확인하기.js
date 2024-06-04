function solution(my_string, is_prefix) {
    const myary = my_string.split('');
    const is_preary = is_prefix.split('');

    // 접두사의 길이가 my_string 보다 길면 접두사가 될 수 없음
    if (is_preary.length > myary.length) return 0;

    // 모든 요소가 일치하는지 확인
    for (let i = 0; i < is_preary.length; i++) {
        if (is_preary[i] !== myary[i]) {
            return 0;
        }
    }

    return 1;
}