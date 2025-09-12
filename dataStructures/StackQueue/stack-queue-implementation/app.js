const Stack = require('./Stack');
const Queue = require('./Queue');
const DeleteMiddleStack = require('./DeleteMiddleElement/DeleteMiddleStack');
const MinStack = require('./MinStack/MinStack.js');


function demoStack() {
  console.log('--- Stack Demo ---');
  const s = new Stack();

  s.push(10);
  s.push(20);
  s.push(30);
  console.log('Stack after pushes:', s.display());

  console.log('Peek top:', s.peek());
  console.log('Pop:', s.pop());
  console.log('Stack after pop:', s.display());

  console.log('Is stack empty?', s.isEmpty());
  s.pop();
  s.pop();
  console.log('Is stack empty after popping all?', s.isEmpty());
  console.log('Stack final:', s.display());
}

function demoDeleteMiddle() {
  console.log('--- Delete Middle Element Demo ---');
  
  // Test case for odd number of elements
  const stackOdd = new Stack();
  stackOdd.push(1);
  stackOdd.push(2);
  stackOdd.push(3);
  stackOdd.push(4);
  stackOdd.push(5);

  console.log('\nOdd number of elements:');
  console.log('Before Delete:', stackOdd.display());
  DeleteMiddleStack.delete(stackOdd);
  console.log('After Delete:', stackOdd.display());
  
  // Test case for even number of elements
  const stackEven = new Stack();
  stackEven.push(1);
  stackEven.push(2);
  stackEven.push(3);
  stackEven.push(4);

  console.log('\nEven number of elements:');
  console.log('Before Delete:', stackEven.display());
  DeleteMiddleStack.delete(stackEven);
  console.log('After Delete:', stackEven.display());
}




function demoQueue() {
  console.log('--- Queue Demo ---');
  const q = new Queue();

  q.Enqueue(10);
  q.Enqueue(20);
  q.Enqueue(30);
  console.log('Queue after enqueues:', q.display());

  console.log('Peek front:', q.Peek());
  console.log('Dequeue:', q.Dequeue());
  console.log('Queue after dequeue:', q.display());

  console.log('Is queue empty?', q.isEmpty());
  q.Dequeue();
  q.Dequeue();
  console.log('Is queue empty after dequeuing all?', q.isEmpty());
  console.log('Queue final:', q.display());
}


function demoMinStack() {
  console.log('--- MinStack Demo ---');
  const minStack = new MinStack();

  // Push elements
  minStack.push(15); // Top -> 15 (min: 15)
  minStack.push(7); // Top -> 7 -> 15 (min: 7)
  minStack.push(12); // Top -> 12 -> 7 -> 15 (min: 7)
  minStack.push(3); // Top -> 3 -> 12 -> 7 -> 15 (min: 3)

  // Print the stack
  console.log('Stack after pushes:');
  console.log(minStack.printStack()); // Output: Top -> 3 -> 12 -> 7 -> 15

  // Get the minimum element
  console.log('Minimum element:', minStack.getMinStack()); // min: 3

  // Pop a node from the stack
  let popped = minStack.pop(); // popped: 3
  console.log('Popped element:', popped);
  console.log('Stack after pop:');
  console.log(minStack.printStack()); // Output: Top -> 12 -> 7 -> 15

  // Get the new minimum element
  console.log('New minimum element:', minStack.getMinStack()); // min: 7

  // Peek the top node
 let peeked = minStack.top; // 
console.log('Top element:', peeked)

  // Push another element
  minStack.push(2); // Top -> 2 -> 12 -> 7 -> 15 (min: 2)
  console.log('Stack after pushing 2:');
  console.log(minStack.printStack()); // Output: Top -> 2 -> 12 -> 7 -> 15
}

function main() {
  demoStack();
  console.log();
  demoDeleteMiddle();
  console.log();
  demoQueue();
  console.log();
  demoMinStack();
}


main();