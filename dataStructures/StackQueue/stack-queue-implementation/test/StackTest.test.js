const Stack = require('../Stack');

test('Push should add items to the stack', () => {
  const s = new Stack();
  s.push(5);
  expect(s.display()).toBe('Top -> 5 -> null');
});

test('Stack should follow LIFO order', () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.pop()).toBe(3);
  expect(s.pop()).toBe(2);
});

test('Pop from empty stack should return null', () => {
  const s = new Stack();
  expect(s.pop()).toBe(null);
});

test('Peek should return the top element without removing', () => {
  const s = new Stack();
  s.push(10);
  s.push(20);
  expect(s.peek()).toBe(20);
  expect(s.display()).toBe('Top -> 20 -> 10 -> null');
});

test('Peek on empty stack should return null', () => {
  const s = new Stack();
  expect(s.peek()).toBe(null);
});

test('isEmpty should return true for empty stack', () => {
  const s = new Stack();
  expect(s.isEmpty()).toBe(true);
});

test('isEmpty should return false for non-empty stack', () => {
  const s = new Stack();
  s.push(10);
  expect(s.isEmpty()).toBe(false);
});

test('Multiple stack operations should behave correctly', () => {
  const s = new Stack();
  s.push(10);
  s.push(20);
  s.push(30);
  s.pop();
  s.push(40);
  expect(s.display()).toBe('Top -> 40 -> 20 -> 10 -> null');
});

test('Stack should display correctly after emptying', () => {
  const s = new Stack();
  s.push(10);
  s.pop();
  expect(s.isEmpty()).toBe(true);
  expect(s.display()).toBe('Top -> null');
});
