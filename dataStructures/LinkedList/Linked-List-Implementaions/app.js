const LinkedList = require("./linkedList");
const { reverseList, createReversedList } = require("./reverse/reverse.js");
const list = new LinkedList();

// Test addToEnd
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