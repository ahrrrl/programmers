function solution(a, b, n) {
    const cokeCalculate = (totalCoke, size, returnCoke) => {
        const restCoke = totalCoke % size;
        const reCoke = Math.floor(totalCoke / size) * returnCoke;

        if(restCoke + reCoke < size) return reCoke
        
        return reCoke + cokeCalculate(restCoke + reCoke, size, returnCoke)
    }
    return cokeCalculate(n, a, b);
}