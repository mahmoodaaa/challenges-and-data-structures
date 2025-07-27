const MinStack = require('../MinStack/MinStack');

test('New MinStack should be empty', () => {
  const stack = new MinStack();
  expect(stack.isEmpty()).toBe(true);
  expect(stack.printStack()).toBe('Top -> null');
});

test('Pushing elements should update stack correctly', () => {
  const stack = new MinStack();
  stack.push(10);
  stack.push(5);
  stack.push(20);
  
  expect(stack.printStack()).toBe('Top -> 20 -> 5 -> 10 -> null');
  expect(stack.getMinStack()).toBe(5);
});

test('Popping elements should maintain minimum correctly', () => {
  const stack = new MinStack();
  stack.push(10);
  stack.push(5);
  stack.push(20);
  
  expect(stack.pop()).toBe(20);
  expect(stack.getMinStack()).toBe(5);
  
  expect(stack.pop()).toBe(5);
  expect(stack.getMinStack()).toBe(10);
  
  expect(stack.pop()).toBe(10);
  expect(stack.isEmpty()).toBe(true);
});

test('Peek should return top element without removing it', () => {
  const stack = new MinStack();
  stack.push(10);
  stack.push(5);
  stack.push(20);
  
  expect(stack.peek()).toBe(20);
  expect(stack.printStack()).toBe('Top -> 20 -> 5 -> 10 -> null');
});

test('Top should return top element', () => {
  const stack = new MinStack();
  stack.push(10);
  stack.push(5);
  stack.push(20);
  
  expect(stack.top.data).toBe(20);
});

test('Get minimum should work with single element', () => {
  const stack = new MinStack();
  stack.push(10);
  
  expect(stack.getMinStack()).toBe(10);
});

test('Get minimum should handle empty stack', () => {
  const stack = new MinStack();
  
  expect(stack.getMinStack()).toBe('the stack is empty');
});

test('Get minimum should handle multiple elements', () => {
  const stack = new MinStack();
  stack.push(15);
  stack.push(7);
  stack.push(12);
  stack.push(3);
  
  expect(stack.getMinStack()).toBe(3);
});

test('Pop should remove and return top element', () => {
  const stack = new MinStack();
  stack.push(10);
  stack.push(5);
  
  expect(stack.pop()).toBe(5);
  expect(stack.printStack()).toBe('Top -> 10 -> null');
});

test('Pop from empty stack should return null', () => {
  const stack = new MinStack();
  
  expect(stack.pop()).toBeNull();
});

test('Print stack should show correct format', () => {
  const stack = new MinStack();
  stack.push(10);
  stack.push(5);
  
  expect(stack.printStack()).toBe('Top -> 5 -> 10 -> null');
});

test('Top should handle empty stack', () => {
  const stack = new MinStack();
  
  expect(stack.top).toBeNull();
});