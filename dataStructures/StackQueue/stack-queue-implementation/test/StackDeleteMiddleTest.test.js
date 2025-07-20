const Stack = require('../Stack');
const DeleteMiddleStack = require('../DeleteMiddleElement/DeleteMiddleStack');

test('Delete middle from empty stack should throw error', () => {
  const s = new Stack();
  expect(() => DeleteMiddleStack.delete(s)).toThrow('Cannot delete middle element from empty stack');
});

test('Delete middle from single element stack should remove that element', () => {
  const s = new Stack();
  s.push(10);
  DeleteMiddleStack.delete(s);
  expect(s.display()).toBe('Top -> null');
});

test('Delete middle from even number of elements', () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  s.push(4);
  DeleteMiddleStack.delete(s);
  expect(s.display()).toBe('Top -> 4 -> 2 -> null');
});

test('Delete middle from odd number of elements', () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  s.push(4);
  s.push(5);
  DeleteMiddleStack.delete(s);
  expect(s.display()).toBe('Top -> 5 -> 4 -> 2 -> 1 -> null');
});

test('Delete middle should maintain stack order', () => {
  const s = new Stack();
  s.push(10);
  s.push(20);
  s.push(30);
  s.push(40);
  s.push(50);
  DeleteMiddleStack.delete(s);
  expect(s.display()).toBe('Top -> 50 -> 40 -> 20 -> 10 -> null');
});

test('Delete middle from stack with negative numbers', () => {
  const s = new Stack();
  s.push(-1);
  s.push(-2);
  s.push(-3);
  s.push(-4);
  s.push(-5);
  DeleteMiddleStack.delete(s);
  expect(s.display()).toBe('Top -> -5 -> -4 -> -2 -> -1 -> null');
});

test('Delete middle from stack with mixed values', () => {
  const s = new Stack();
  s.push('a');
  s.push(2);
  s.push(true);
  s.push(4);
  s.push('e');
  DeleteMiddleStack.delete(s);
  expect(s.display()).toBe('Top -> e -> 4 -> 2 -> a -> null');
});

test('Delete middle multiple times', () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  s.push(4);
  s.push(5);
  
  DeleteMiddleStack.delete(s); // Remove 3
  expect(s.display()).toBe('Top -> 5 -> 4 -> 2 -> 1 -> null');
  
  DeleteMiddleStack.delete(s); // Remove 4
  expect(s.display()).toBe('Top -> 5 -> 2 -> 1 -> null');
  
  DeleteMiddleStack.delete(s); // Remove 2
  expect(s.display()).toBe('Top -> 5 -> 1 -> null');
});