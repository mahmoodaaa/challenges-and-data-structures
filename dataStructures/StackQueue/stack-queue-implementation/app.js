const Stack = require('./Stack');
const Queue = require('./Queue');

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
  demoQueue();
}

main();