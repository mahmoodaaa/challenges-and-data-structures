const Node = require('./ClassNode');

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    Enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
        return this.display();
    }

    Dequeue() {
        if (this.isEmpty()) {
            return "Empty Queue";
        }
        const value = this.front.data;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        this.size--;
        return value;
    }

    Peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.front.data;
    }

    isEmpty() {
        return this.front === null;
    }

    display() {
        if (this.isEmpty()) {
            return "Front -> null";
        }
        let current = this.front;
        let result = "Front -> ";
        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }
        result += "null";
        return result;
    }

    getSize() {
        return this.size;
    }
}

module.exports = Queue;