function solution(arr1, arr2) {
    let newArr = []
    for (i=0; i<arr1.length; i++){
        let row = []
        for (j=0; j<arr1[i].length; j++){
            row.push(arr1[i][j] + arr2[i][j]);
        }
        newArr.push(row)
    }
    return newArr
}