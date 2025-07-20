const Stack = require('./Stack');
const Queue = require('./Queue');
const DeleteMiddleStack = require('./DeleteMiddleElement/DeleteMiddleStack');


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

function main() {
  demoStack();
  console.log();
  demoDeleteMiddle();
  console.log();
  demoQueue();
}

main();