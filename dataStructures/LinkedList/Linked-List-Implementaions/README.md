#Linked List Implementation#

Overview
Implement a singly linked list data structure in javascript.
The Node class should have properties for storing data and a reference to the next node in the linkedlist.
The LinkedList class should have a property Node head to store the head of the linkedlist.
The LinkedList class should support functions to:
add(data): Add a new node with the specified data to the end of the linkedlist.
remove(data): Remove the first node with the specified data from the linkedlist.
printList(): Print the contents of the list in order.
includes(data): Check if the linked List contains a node with the specified value.
insertAt(data, index): Insert a new node with the specified data at the specified index in the linkedlist.


This project implements a **singly linked list** in JavaScript using a custom `NodeClass` and `LinkedList` class. It includes full test coverage and manual test logic.

---

## 🧠 Problem Domain

Design a linked list with the following operations:
- `addToEnd(data)`
- `removeFirst(data)`
- `includes(data)`
- `insertAt(data, index)`
- `printList()`

---

## 🧪 Inputs and Expected Outputs

| Method         | Input               | Expected Output                  |
|----------------|---------------------|----------------------------------|
| `addToEnd`     | 10, 20, 30          | List: 10 -> 20 -> 30 -> null     |
| `removeFirst`  | 20                  | List: 10 -> 30 -> null           |
| `includes`     | 30                  | Node { data: 30 }                |
| `insertAt`     | 15 at index 1       | List: 10 -> 15 -> 30 -> null     |

---


## 👁️ Visual (Whiteboard)

### `add`
![add](./add.png)

### `include(search)`
![include(search)](./include(serach).png)

### `insertAt`
![insertAt](./insertAt.png)

### `print`
![print](./print.png)

### `removeFirst`
![removeFirst](./reomveFirst.png)

### `test`
![test](./test.png)

### `test02`
![test02](./test02.png)

### `whitboard-all`
![whitboard-all](./whitboard-all.png)





