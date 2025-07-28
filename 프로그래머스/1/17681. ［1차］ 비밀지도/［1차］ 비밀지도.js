function solution(n, arr1, arr2) {
  return arr1.map((a, i) => {
    const binary = (a | arr2[i]).toString(2).padStart(n, '0');
    return [...binary].map(bit => bit === '1' ? '#' : ' ').join('');
  });
}