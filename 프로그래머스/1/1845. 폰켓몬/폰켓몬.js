function solution(nums) {
    const savedNums = new Set();
    for (const num of nums) {
        if(savedNums.has(num)) continue;
        savedNums.add(num);
        if(savedNums.size === nums.length / 2) {
            return savedNums.size;
        }
    }
    return savedNums.size;
}