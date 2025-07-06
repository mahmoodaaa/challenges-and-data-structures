const LinkedList = require("../linkedList");

function reverseList(list) {
    let prev = null;
    let current = list.head;
    
    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    list.head = prev;
    return list;
}

function createReversedList(list) {
    const reversedList = new LinkedList();
    let current = list.head;
    
    while (current !== null) {
        reversedList.addToEnd(current.data);
        current = current.next;
    }
    
    return reverseList(reversedList);
}

module.exports = {
    reverseList,
    createReversedList
};


