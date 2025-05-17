console.log("Hello from challengeing");



function reverseArray(arr) {
    const rev = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        rev.push(arr[i]);
    }
    return rev;
}

function reverseArrayy(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayy([1, 2, 3, 4, 5]));





function findMostFrequent(arr) {
    if (arr.length === 0) return null;
    

    arr.sort((a, b) => a - b);
    
    let cruNum = arr[0];
    let cruCount = 1;
    let maxNum = crNum;
    let maxCount = cruCount;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === currentNum) {
            cruCount++;
        } else {
            if (cruCount > maxCount) {
                maxCount = cruCount;
                maxNum = currentNum;
            }
            cruNum = arr[i];
            currentCount = 1;
        }
    }
    
    if (cruCount > maxCount) {
        maxNum = cruNum;
    }
    
    return maxNum;
}





function findMinimumValue(arr) {
    if (arr.length === 0) {
        return undefined; 
    }
    
    let min = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    return min;
}


console.log(findMinimumValue([10, 15, 8, 6, 12])); 
console.log(findMinimumValue([11, 5, 7, 9]));      
console.log(findMinimumValue([17, 13, 25, 5]));    
console.log(findMinimumValue([55, 13, 2, 5]));   
console.log(findMinimumValue([12, 23, 5, 7]));   