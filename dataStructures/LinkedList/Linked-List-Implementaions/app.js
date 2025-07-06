const LinkedList = require("./linkedList.js");
const { reverseList, createReversedList } = require("./reverse/revers.js");
const mergeSortedLists = require("./MergeSorted/mergeSorted.js");
const { rotateLeft, rotateRight } = require("./rotateLinkedList/rotateLinkedList.js");




const list = new LinkedList();

// Test addToEnd
console.log("\n== Adding elements ==");
console.log("== Adding elements ==");
list.addToEnd(10);
list.addToEnd(20);
list.addToEnd(30);
list.printList(); // Should print: 10 -> 20 -> 30 -> null

// Test insertAt
console.log("\n== Insert at index ==");
list.insertAt(15, 1);
list.printList(); 

console.log("\n== Search for node ==");
const found = list.includes(20);
console.log("Found:", found ? found.data : "Not found");

const notFound = list.includes(99);
console.log("Found:", notFound ? notFound.data : "Not found");


console.log("\n== Remove first occurrence ==");
list.removeFirst(15);
list.printList(); 

list.removeFirst(10);
list.printList();

// Try to remove non-existent
list.removeFirst(100);
list.printList(); 

console.log("\n== Final List ==");
list.printList();

// Test reverseList
console.log("\n== Testing Reverse ==");
const newList = new LinkedList();
newList.addToEnd(1);
newList.addToEnd(2);
newList.addToEnd(3);
newList.addToEnd(4);

console.log("\nOriginal List:");
newList.printList();

console.log("\nReversing in place...");
const reversed = reverseList(newList);
console.log("Reversed List:");
reversed.printList();

// Test createReversedList
console.log("\nCreating new reversed list...");
const originalList = new LinkedList();
originalList.addToEnd(5);
originalList.addToEnd(6);
originalList.addToEnd(7);

console.log("\nOriginal List:");
originalList.printList();

const newReversed = createReversedList(originalList);
console.log("\nNew Reversed List:");
newReversed.printList();

console.log("\nOriginal List after creating new reversed list:");
originalList.printList();

// Test mergeSortedLists
console.log("\n== Testing Merge Sorted Lists ==");

// Example 1: Merging two sorted lists
const list1 = new LinkedList();
const list2 = new LinkedList();

list1.addToEnd(1);
list1.addToEnd(3);
list1.addToEnd(5);

list2.addToEnd(2);
list2.addToEnd(4);
list2.addToEnd(6);

console.log("\nList 1:");
list1.printList();
console.log("List 2:");
list2.printList();

const mergedList1 = mergeSortedLists(list1, list2);
console.log("\nMerged List:");
mergedList1.printList();

// Example 2: Merging lists with different lengths
const list3 = new LinkedList();
const list4 = new LinkedList();

list3.addToEnd(10);
list3.addToEnd(20);
list3.addToEnd(30);

list4.addToEnd(5);
list4.addToEnd(15);
list4.addToEnd(25);
list4.addToEnd(35);

console.log("\nList 3:");
list3.printList();
console.log("List 4:");
list4.printList();

const mergedList2 = mergeSortedLists(list3, list4);
console.log("\nMerged List:");
mergedList2.printList();

// Example 3: Merging with empty list
const emptyList = new LinkedList();
const list5 = new LinkedList();

list5.addToEnd(7);
list5.addToEnd(9);
list5.addToEnd(11);

console.log("\nEmpty List:");
emptyList.printList();
console.log("List 5:");
list5.printList();

const mergedList3 = mergeSortedLists(emptyList, list5);
console.log("\nMerged List:");
mergedList3.printList();

console.log("\n== Testing Rotate Linked List ==");

// Test Case 1: Left Rotation
const rotateList1 = new LinkedList();
[1, 2, 3, 4, 5, 6].forEach(num => rotateList1.addToEnd(num));
console.log("\nOriginal list:");
console.log(rotateList1.printList());

console.log("\nRotated Left by 2:");
rotateList1.head = rotateLeft(rotateList1.head, 2);
console.log(rotateList1.printList()); // Expected: 3 -> 4 -> 5 -> 6 -> 1 -> 2 -> null

// Test Case 2: Right Rotation
const rotateList2 = new LinkedList();
[10, 20, 30, 40, 50].forEach(num => rotateList2.addToEnd(num));
console.log("\nOriginal list:");
console.log(rotateList2.printList());

console.log("\nRotated Right by 3:");
rotateList2.head = rotateRight(rotateList2.head, 3);
console.log(rotateList2.printList()); // Expected: 40 -> 50 -> 10 -> 20 -> 30 -> null

// Test Case 3: Right Rotation with smaller list
const rotateList3 = new LinkedList();
[5, 10, 15, 20].forEach(num => rotateList3.addToEnd(num));
console.log("\nOriginal list:");
console.log(rotateList3.printList());

console.log("\nRotated Right by 1:");
rotateList3.head = rotateRight(rotateList3.head, 1);
console.log(rotateList3.printList()); // Expected: 10 -> 15 -> 20 -> 5 -> null

