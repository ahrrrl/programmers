function solution(n) {
    const k = n % 2 ? (n+1)/2 : n/2;
  return n % 2 ? k**2 : 4*k*(k+1)*(2*k+1)/6 ;
}