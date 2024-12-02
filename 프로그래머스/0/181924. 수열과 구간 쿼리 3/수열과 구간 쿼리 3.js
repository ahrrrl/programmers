function solution(arr, queries) {
    queries.forEach((v) => [arr[v[0]],arr[v[1]]] = [arr[v[1]],arr[v[0]]])
    return arr
}