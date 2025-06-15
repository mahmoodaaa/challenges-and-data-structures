
const Node = require("./NodeClass");
class LinkedList {
    constructor() {
        this.head = null;
    }


  addToEnd(data) {
    
     const newNode = new Node(data);
    if(this.head===null){
        this.head = new Node(data);
        return;
    }
     
    let current = this.head;
    while(current.next!==null){
        current = current.next;
    }
    current.next = newNode;   
 }


removeFirst(data) {
    if (this.head === null) {
        return;
    }
    if (this.head.data === data) {
        this.head = this.head.next;
        return;
    }
    let current = this.head;
    while (current.next !== null) {
        if (current.next.data === data) {
            current.next = current.next.next;
            return;
        }
        current = current.next;
    }
}

 printList() {
  let result = '';
  let current = this.head;
  while (current !== null) {
    result += `${current.data} -> `;
    current = current.next;
  }
  result += 'null';
  console.log(result); // Single log with the full string
}

includes(data) {
        if (this.head === null) {
            return null;
        }
        
        let ptr = this.head;
        while (ptr !== null) {
            if (ptr.data === data) {
                return ptr;
            }
            ptr = ptr.next;
        }
        
        return null;
    }

    insertAt(data, index) {
        if (index < 0) throw new Error("Index must be >= 0");
        const newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1 && current; i++) {
            current = current.next;
        }
        if (!current) throw new Error("Index out of bounds");
        newNode.next = current.next;
        current.next = newNode;
    }
 
}



module.exports = LinkedList;