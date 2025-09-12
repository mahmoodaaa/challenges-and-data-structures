const LinkedList = require("../linkedList.js");

const { rotateLeft, rotateRight } = require("../rotateLinkedList/rotateLinkedList.js");

describe("rotateLinkedList.js", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    [1, 2, 3, 4, 5].forEach(num => list.addToEnd(num));
  });

  test("rotateLeft by 2", () => {
    list.head = rotateLeft(list.head, 2);
    expect(list.printList()).toBe("3 -> 4 -> 5 -> 1 -> 2 -> null");
  });

  test("rotateRight by 2", () => {
    list.head = rotateRight(list.head, 2);
    expect(list.printList()).toBe("4 -> 5 -> 1 -> 2 -> 3 -> null");
  });

  test("rotateLeft by 0 does nothing", () => {
    list.head = rotateLeft(list.head, 0);
    expect(list.printList()).toBe("1 -> 2 -> 3 -> 4 -> 5 -> null");
  });

  test("rotateRight by list length (no change)", () => {
    list.head = rotateRight(list.head, 5);
    expect(list.printList()).toBe("1 -> 2 -> 3 -> 4 -> 5 -> null");
  });

  test("rotateLeft on empty list", () => {
    const empty = new LinkedList();
    empty.head = rotateLeft(empty.head, 3);
    expect(empty.printList()).toBe("null");
  });
});