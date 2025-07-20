const Node = require('./ClassNode');

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        const value = this.top.data;  // fixed here
        this.top = this.top.next;
        return value;
    }

    peek() {
        return this.top ? this.top.data : null;  // fixed here
    }

    isEmpty() {
        return this.top === null;
    }

    display() {
        let current = this.top;
        let str = 'Top -> ';
        while (current) {
            str += current.data + ' -> ';  
            current = current.next;
        }
        str += 'null';
        return str;
    }

    size() {
        let count = 0;
        let current = this.top;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}

module.exports = Stack;