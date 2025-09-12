const Queue = require('../Queue');

test('Enqueue nodes to the queue correctly', () => {
  const q = new Queue();
  expect(q.Enqueue(1)).toBe('Front -> 1 -> null');
  expect(q.Enqueue(2)).toBe('Front -> 1 -> 2 -> null');
});

test('Dequeue nodes from the queue correctly', () => {
  const q = new Queue();
  q.Enqueue(10);
  q.Enqueue(20);
  expect(q.Dequeue()).toBe(10);
  expect(q.display()).toBe('Front -> 20 -> null');
});

test('Dequeue from empty queue should return "Empty Queue"', () => {
  const q = new Queue();
  expect(q.Dequeue()).toBe('Empty Queue');
});

test('Peek should return the front element', () => {
  const q = new Queue();
  q.Enqueue(5);
  q.Enqueue(15);
  expect(q.Peek()).toBe(5);
});

test('Peek on empty queue should return null', () => {
  const q = new Queue();
  expect(q.Peek()).toBe(null);
});

test('Queue size should be tracked correctly', () => {
  const q = new Queue();
  expect(q.getSize()).toBe(0);
  q.Enqueue(1);
  q.Enqueue(2);
  expect(q.getSize()).toBe(2);
  q.Dequeue();
  expect(q.getSize()).toBe(1);
});