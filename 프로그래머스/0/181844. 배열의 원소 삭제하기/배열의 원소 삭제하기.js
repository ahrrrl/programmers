function solution(arr, delete_list) {
    return arr.filter((v) => {
        for(let deleteItem of delete_list){
            if(deleteItem === v){
                return false
            }
        }
        return true
    })
}