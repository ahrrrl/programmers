function solution(a, b) {
    const A = String(a) + String(b)
    const B = String(b) + String(a)
  return A > B ? +A : +B
}