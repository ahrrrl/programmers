function solution(num_list) {
    const nums1 = num_list.filter((num) => num%2 === 0 );
    const answer = [nums1.length, num_list.length - nums1.length];
    return answer;
}