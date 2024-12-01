function solution(ineq, eq, n, m) {
  const new_eq = eq === '=' ? true : false;
    if (new_eq)
        return ineq === '>' ? +(n >= m) : +(n <= m) ;
    else 
        return ineq === '>' ? +(n > m) : +(n < m) ;
}