# Linked List Implementation

## Table of Contents
- [Node Class](#node-class)
- [LinkedList Class](#linkedlist-class)
- [Basic Operations](#basic-operations)
- [Reverse Linked List](#reverse-linked-list)
- [Merge Sorted Lists](#merge-sorted-lists)
- [Rotate Linked List](#rotate-linked-list)

## Node Class
The Node class should have properties for storing data and a reference to the next node in the linked list.

## LinkedList Class
The LinkedList class should have a property Node head to store the head of the linked list.

## Basic Operations
The LinkedList class supports functions to:
- add(data): Add a new node with the specified data to the end of the linked list.
- remove(data): Remove the first node with the specified data from the linked list.
- printList(): Print the contents of the list in order.
- includes(data): Check if the linked list contains a node with the specified value.
- insertAt(data, index): Insert a new node with the specified data at the specified index in the linked list.


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
![add](./docs/add.png)

### `include(search)`
![include(search)](./docs/include(serach).png)

### `insertAt`
![insertAt](./docs/insertAt.png)

### `print`
![print](./docs/print.png)

### `removeFirst`
![removeFirst](./docs/reomveFirst.png)

### `test`
![test](./docs/test.png)

### `test02`
![test02](./docs/test02.png)

### `whitboard-all`
![whitboard-all](./docs/whitboard-all.png)


### `reverseWhiteboard`

![reverseWhiteboard](./docs/reverseWhiteboard.png)

![reverseTest](./docs/reverseTest.png)

### `add-reversere-app`

![add-reversere-app](./docs/add-reversere-app.js.png)

### `Merge Sorted Linked Lists`

![Merge Sorted Whiteboard](./docs/mergeSorted-whiteboard.png)

![Test Cases](./docs/test-mergeSort.png)

![Output Example](./docs/output-mergSorted.png)



### Rotate LinkedList Whiteboard
![Rotate LinkedList Whiteboard](./docs/rotateLinkedList-whiteboard.png)

### Test Cases
![Test Cases](./docs/test-rotate.png)

### Output Cases

![Output 1](./docs/output1-rotate.png)

![Output 2](./docs/output2-rotate.png)

![Output 3](./docs/ouput3-rotate.png)