const LinkedList = require("./linkedList");

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
list.printList(); // Should remain: 20 -> 30 -> null


console.log("\n== Final List ==");
list.printList();