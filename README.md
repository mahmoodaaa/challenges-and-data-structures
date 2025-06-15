# Whiteboard Challenges
## Table of Contents
- [Array Reversal](#array-reversal)
- [Most Frequent Number](#most-frequent-number)
- [Minimum Value](#minimum-value)
- [Reverse-Characters](#reverse-characters)
- [RemoveMiddleValue](#RemoveMiddleValue)
- [Linked List Implementations](#linked-list-implementations)




## Array Reversal

### Description
Create a function named ArrayReversal that accepts an array as its parameter.
Without using any built-in methods, return a new array where the elements are in reverse order.

### Approach
1. Create a new array to store the reversed elements
2. Iterate through the input array from the last element to the first
3. Add each element to the new array
4. Return the new array

### Example
```javascript
Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]
```

### Whiteboard Image
![ArrayReverse](./ArrayReverse/reverseArrays-miro.png)

## Most Frequent Number

### Description
Create a function that finds the most frequently occurring number in an array.

### Approach
1. Create an object to store number frequencies
2. Iterate through the array and count occurrences
3. Find the number with the highest frequency# Revers-Characters


## Contributing

If you would like to contribute to the Revers-Characters project, please fork this repository and submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
4. Return the most frequent number

### Example
```javascript
Input: [1, 2, 3, 2, 4, 2, 5]
Output: 2 (appears 3 times)
```

### Whiteboard Image
![MostFrequencyNumber](./MostFrequancy/MostFrquancyNumber.png)

## Minimum Value

### Description
Create a function that finds the minimum value in an array of numbers.

### Approach
1. Initialize minimum as the first element
2. Iterate through the array
3. Compare each element with current minimum
4. Update minimum if a smaller value is found
5. Return the minimum value

### Example
```javascript
Input: [34, 15, 88, 2, 99]
Output: 2

```

### Whiteboard Image
![MinimumValue](./minValue/minmumValue-miro.png)





## Introduction

This is a brief introduction to the Revers-Characters project.

## Reverse-Characters

Here are some images of the Revers-Characters:

### Character 1

![Revers-Character 1](./Reverse-Characters/reverse-images/reverse03.png)

## Linked List Implementations

### Description
Create a linked list data structure with basic operations including insertion, deletion, and traversal.

### Whiteboard Image
![Linked List Implementation](./all-whiteboard.png)




## Challenge Description :RemoveMiddleValue

Write a function called `RemoveMiddleValue` that takes in an array of integers and removes the **middle element** if the array length is **odd**.  
- The function **must not use built-in methods** like `splice`, `slice`, or `filter`.
- Return a new array with the middle value removed.
- If the array length is even or 0, return it unchanged.

---

## RemoveMiddleValue

![RemoveMiddleValue](./RemoveMiddleValue/images/removeMiddle.png)

---

## Example

```js
Input: [1, 2, 3, 4, 5]
Output: [1, 2, 4, 5]

Input: [27, 8, 15, 73, 27]
Output: [27, 8, 73, 27]

Input: [7, 9, 13, 25, 5, 17]
Output: [7, 9, 13, 25, 5, 17]

