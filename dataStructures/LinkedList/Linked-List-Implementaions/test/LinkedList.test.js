const LinkedList = require('../linkedList.js');


test("add new node ", () => {
  const l = new LinkedList();
  expect(l.addToEnd(0)).toBe(undefined);
  expect(l.addToEnd(1)).toBe(undefined);
  expect(l.addToEnd(2)).toBe(undefined);

  expect(l.head.data).toBe(0);
  expect(l.head.next.data).toBe(1);
  expect(l.head.next.next.data).toBe(2);

  expect(l.removeFirst(2)).toBe(undefined);
  expect(l.head.next.next).toBeNull();
});

test("insert at ", () => {
  const l = new LinkedList();
  l.addToEnd(0);
  l.insertAt(1, 0);
  expect(l.head.data).toBe(1);
  expect(l.head.next.data).toBe(0);

  l.insertAt(2, 1);
  expect(l.head.next.data).toBe(2);
  expect(l.head.next.next.data).toBe(0);
});

test("print", () => {
  const l = new LinkedList();
  l.addToEnd(1);
  l.addToEnd(2);
  l.addToEnd(3);

  const consoleSpy = jest.spyOn(console, 'log');
  l.printList();
  expect(consoleSpy).toHaveBeenCalledWith('1 -> 2 -> 3 -> null');
  consoleSpy.mockRestore();
});

test("includes", () => {
  const l = new LinkedList();
  l.addToEnd(1);
  l.addToEnd(2);
  l.addToEnd(3);

  expect(l.includes(2)).not.toBeNull(); // Should find 2
  expect(l.includes(4)).toBeNull();     // Should not find 4
});

test("removeFirst", () => {
  const l = new LinkedList();
  l.addToEnd(1);
  l.addToEnd(2);
  l.addToEnd(3);
  l.removeFirst(2); // Removes the middle node (2)

  const consoleSpy = jest.spyOn(console, 'log');
  l.printList();
  expect(consoleSpy).toHaveBeenCalledWith('1 -> 3 -> null');
  consoleSpy.mockRestore();
});