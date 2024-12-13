function solution(my_string, m, c) {
    return Array.from({ length: Math.ceil(my_string.length / m) }, (_, i) =>
        my_string.slice(i * m, i * m + m)[c - 1]
    ).join('');
}