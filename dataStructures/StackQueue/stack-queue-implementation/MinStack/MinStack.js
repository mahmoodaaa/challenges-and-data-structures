const Node = require('../ClassNode');

class MinStack {
  constructor() {
    this.top = null;
    this.size = 0;
  
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
    const value = this.top.data;  
    this.top = this.top.next;
    return value;
}

  peek() {
    return this.top ? this.top.data : null;  
}

  getMinStack() {
    
  if(this.top === null){
    return "the stack is empty";
  }
  if(this.top.next===null){
    return this.top.data;
  }

  let current = this.top;
  let min = current.data;
  while (current) {
    if (current.data < min) {
      min = current.data;
    }
    current = current.next;
  }
  return min;

}
  printStack() {
    let current = this.top;
    let str = 'Top -> ';
    while (current) {
        str += current.data + ' -> ';  
        current = current.next;
    }
    str += 'null';
    return str;
}

  top() {
    if (this.top === null) return "the Stack is empty  ";
    else return this.top.data;
  }




isEmpty() {
    return this.top === null;
}


}
module.exports = MinStack;
