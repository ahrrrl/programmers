function solution(binomial) {
    // 정규식을 사용해 a, op, b를 추출
    const [a, op, b] = binomial.split(' ');

    // 피연산자 a와 b를 숫자로 변환
    const numA = Number(a);
    const numB = Number(b);

    // 연산자에 따라 계산
    switch (op) {
        case '+':
            return numA + numB;
        case '-':
            return numA - numB;
        case '*':
            return numA * numB;
        default:
            throw new Error("Invalid operator");
    }
}