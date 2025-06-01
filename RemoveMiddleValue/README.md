## Challenge Description :RemoveMiddleValue

Write a function called `RemoveMiddleValue` that takes in an array of integers and removes the **middle element** if the array length is **odd**.  
- The function **must not use built-in methods** like `splice`, `slice`, or `filter`.
- Return a new array with the middle value removed.
- If the array length is even or 0, return it unchanged.

---

## Whiteboard Image

![Remove Middle Value Code](./images/removeMiddle.png)

---

## Example

```js
Input: [1, 2, 3, 4, 5]
Output: [1, 2, 4, 5]

Input: [27, 8, 15, 73, 27]
Output: [27, 8, 73, 27]

Input: [7, 9, 13, 25, 5, 17]
Output: [7, 9, 13, 25, 5, 17]

