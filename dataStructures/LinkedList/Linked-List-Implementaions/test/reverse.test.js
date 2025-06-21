const LinkedList = require('../linkedList');
const { reverseList, createReversedList } = require('../reverse/reverse');
describe('Reverse Linked List', () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
        list.addToEnd(1);
        list.addToEnd(2);
        list.addToEnd(3);
        list.addToEnd(4);
    });

    test('should reverse the list in place', () => {
        const reversed = reverseList(list);
        expect(reversed.head.data).toBe(4);
        expect(reversed.head.next.data).toBe(3);
        expect(reversed.head.next.next.data).toBe(2);
        expect(reversed.head.next.next.next.data).toBe(1);
        expect(reversed.head.next.next.next.next).toBeNull();
    });

    test('should create a new reversed list', () => {
        const originalList = new LinkedList();
        originalList.addToEnd(1);
        originalList.addToEnd(2);
        originalList.addToEnd(3);
        
        const reversed = createReversedList(originalList);
        expect(reversed.head.data).toBe(3);
        expect(reversed.head.next.data).toBe(2);
        expect(reversed.head.next.next.data).toBe(1);
        expect(reversed.head.next.next.next).toBeNull();
        
        // Verify original list is unchanged
        expect(originalList.head.data).toBe(1);
        expect(originalList.head.next.data).toBe(2);
        expect(originalList.head.next.next.data).toBe(3);
        expect(originalList.head.next.next.next).toBeNull();
    });

    test('should handle empty list', () => {
        const emptyList = new LinkedList();
        const reversed = reverseList(emptyList);
        expect(reversed.head).toBeNull();
    });
});
