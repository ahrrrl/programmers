function solution(sizes) {
    const arr = sizes.map((v)=> v.sort((a,b)=> a-b)).reduce((acc, cur)=> { const arr =[]; arr[0] = acc[0] < cur[0] ? cur[0] : acc[0];
                                                              arr[1] = acc[1] < cur[1] ? cur[1] : acc[1]; return arr})
    return arr[0] * arr[1] ;
}