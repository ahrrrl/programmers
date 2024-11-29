function solution(rny_string) {
  return rny_string.split('').map((v) => v === 'm' ? 'rn' : v).join('')
}