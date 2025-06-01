function removeMiddleValue(arr) {
    if (arr.length === 0 || arr.length % 2 === 0) {
        return arr; // Return unchanged if empty or even-length
    }

    const mid = Math.floor(arr.length / 2);
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i !== mid) {
            result.push(arr[i]);
        }
    }

    return result;
}


console.log(removeMiddleValue([1, 2, 3, 4, 5]));// Output: [1, 2, 4, 5]
console.log(removeMiddleValue([27,8,15,27,12,33]));// Output: [27, 8, 12, 33]
console.log(removeMiddleValue([7, 9, 13, 25, 5,17])); // Output: [7, 9, 25, 5, 17]
