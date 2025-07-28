function solution(numbers, hand) {
    const mapObj = {
        1 : [0, 0],
        2 : [0, 1],
        3 : [0, 2],
        4 : [1, 0],
        5 : [1, 1],
        6 : [1, 2],
        7 : [2, 0],
        8 : [2, 1],
        9 : [2, 2],
        '*' : [3, 0],
        0 : [3, 1],
        '#' : [3, 2],
    };

    let leftHand = '*';
    let rightHand = '#';
    const onlyLeft = [1, 4, 7];
    const onlyRight = [3, 6, 9];
    let result = ''
    for (number of numbers) {
        if (onlyLeft.includes(number)) {
            result += 'L';
            leftHand = number;
        } else if (onlyRight.includes(number)) {
            result += 'R';
            rightHand = number;
        } else {
            const [leftX, leftY] = mapObj[leftHand];
            const [rightX, rightY] = mapObj[rightHand];
            const [targetX, targetY] = mapObj[number];
            const leftLength = Math.abs(leftX - targetX) + Math.abs(leftY - targetY);
            const rigthLength = Math.abs(rightX - targetX) + Math.abs(rightY - targetY);
            
            if(leftLength > rigthLength) {
                result += 'R';
                rightHand = number;
            } else if (leftLength < rigthLength) {
                result += 'L';
                leftHand = number;
            } else {
                if(hand === 'right') {
                    result += 'R';
                    rightHand = number;
                } else {
                    result += 'L';
                    leftHand = number;
                }
            }
        }
    }
    
    return result;
}