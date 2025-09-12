
const LinkedList = require("../linkedList.js");
const Node = require("../NodeClass");

function rotateLeft(head, k) {
    if (!head || k <= 0) return head;

    // Count the length of the list
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    k = k % length;
    if (k === 0) return head;

    // Find the new head after k nodes
    let count = 1;
    let prev = null;
    current = head;
    while (count <= k && current) {
        prev = current;
        current = current.next;
        count++;
    }

    if (!current) return head;

    let newHead = current;
    prev.next = null;

    let tail = newHead;
    while (tail.next) {
        tail = tail.next;
    }

    tail.next = head;

    return newHead;
}

function rotateRight(head, k) {
    if (!head || k <= 0) return head;

    // Count the length
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    k = k % length;
    if (k === 0) return head;

    let stepsToNewHead = length - k;

    current = head;
    let prev = null;
    for (let i = 0; i < stepsToNewHead; i++) {
        prev = current;
        current = current.next;
    }

    let newHead = current;
    prev.next = null;

    let tail = newHead;
    while (tail.next) {
        tail = tail.next;
    }

    tail.next = head;

    return newHead;
}

module.exports = {
    rotateLeft,
    rotateRight
};