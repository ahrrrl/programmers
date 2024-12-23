function solution(myStr) {
    return myStr.split(/[abc]/).filter(v=>v).length !== 0 ? myStr.split(/[abc]/).filter(v=>v) : ["EMPTY"]
}