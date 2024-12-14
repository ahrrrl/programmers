function solution(my_string, indices) {
    let chars = [...my_string];
    for (const indice of indices) {
        chars[indice] = chars[indice].toUpperCase(); 
    }
    return chars.join("").replace(/[A-Z]/g, "");
}