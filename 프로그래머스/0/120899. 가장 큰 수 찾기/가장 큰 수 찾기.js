function solution(array) {
      return array.reduce((acc, value, i) => {
        if (value > acc[0]) {
            return [value, i];
        }
        return acc;
    }, [array[0], 0]);
}