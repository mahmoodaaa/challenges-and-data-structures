const Node = require("../NodeClass");
const LinkedList = require("../linkedList.js");

function mergeSortedLists(list1, list2) {
    if (!list1.head) return list2;
    if (!list2.head) return list1;

    const mergedList = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
    let currentMerged;

    // Handle first node
    if (current1.data <= current2.data) {
        mergedList.head = current1;
        current1 = current1.next;
    } else {
        mergedList.head = current2;
        current2 = current2.next;
    }
    currentMerged = mergedList.head;

    // Merge remaining nodes
    while (current1 && current2) {
        if (current1.data <= current2.data) {
            currentMerged.next = current1;
            current1 = current1.next;
        } else {
            currentMerged.next = current2;
            current2 = current2.next;
        }
        currentMerged = currentMerged.next;
    }

    // Append remaining nodes from either list
    if (current1) {
        currentMerged.next = current1;
    } else if (current2) {
        currentMerged.next = current2;
    }

    return mergedList;
}

module.exports = mergeSortedLists;