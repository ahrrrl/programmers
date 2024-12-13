function solution(my_string, s, e) {
      const prefix = my_string.slice(0, s); // 시작 인덱스 이전 부분
    const middle = my_string.slice(s, e + 1); // 뒤집을 구간
    const suffix = my_string.slice(e + 1); // 끝 인덱스 이후 부분

    // middle을 뒤집고 나머지 부분과 결합
    return prefix + middle.split('').reverse().join('') + suffix;
}