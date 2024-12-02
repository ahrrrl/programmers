function solution(numLog) {
    const ex = {
        1: 'w',
        '-1': 's',
        10: 'd',
        '-10': 'a'
    }
    let answer = ''
  numLog.reduce((acc, cur) => {
      answer += ex[cur - acc]
      return cur
  })
    return answer
}