function solution(num_list) {
    const arr = num_list[num_list.length-1] > num_list[num_list.length-2] ? num_list[num_list.length-1] - num_list[num_list.length-2] : num_list[num_list.length-1] * 2 
    num_list.push(arr)
    return num_list
}