const LinkedList = require('../linkedList.js');
const Node = require("../NodeClass");
const mergeSortedLists = require("../MergeSorted/mergeSorted");

describe('mergeSortedLists', () => {
    test('should merge two empty lists', () => {
        const list1 = new LinkedList();
        const list2 = new LinkedList();
        const mergedList = mergeSortedLists(list1, list2);
        expect(mergedList.head).toBeNull();
    });

    test('should return non-empty list when one list is empty', () => {
        const list1 = new LinkedList();
        const list2 = new LinkedList();
        list2.addToEnd(1);
        list2.addToEnd(3);
        list2.addToEnd(5);
        
        const mergedList = mergeSortedLists(list1, list2);
        expect(mergedList.head.data).toBe(1);
        expect(mergedList.head.next.data).toBe(3);
        expect(mergedList.head.next.next.data).toBe(5);
        expect(mergedList.head.next.next.next).toBeNull();
    });

    test('should merge two sorted lists with duplicates', () => {
        const list1 = new LinkedList();
        const list2 = new LinkedList();
        
        list1.addToEnd(5);
        list1.addToEnd(10);
        list1.addToEnd(15);
        
        list2.addToEnd(2);
        list2.addToEnd(3);
        list2.addToEnd(20);
        
        const mergedList = mergeSortedLists(list1, list2);
        expect(mergedList.head.data).toBe(2);
        expect(mergedList.head.next.data).toBe(3);
        expect(mergedList.head.next.next.data).toBe(5);
        expect(mergedList.head.next.next.next.data).toBe(10);
        expect(mergedList.head.next.next.next.next.data).toBe(15);
        expect(mergedList.head.next.next.next.next.next.data).toBe(20);
        expect(mergedList.head.next.next.next.next.next.next).toBeNull();
    });

    test('should merge lists with different lengths', () => {
        const list1 = new LinkedList();
        const list2 = new LinkedList();
        
        list1.addToEnd(10);
        list1.addToEnd(20);
        list1.addToEnd(30);
        
        list2.addToEnd(5);
        list2.addToEnd(15);
        list2.addToEnd(25);
        list2.addToEnd(35);
        
        const mergedList = mergeSortedLists(list1, list2);
        expect(mergedList.head.data).toBe(5);
        expect(mergedList.head.next.data).toBe(10);
        expect(mergedList.head.next.next.data).toBe(15);
        expect(mergedList.head.next.next.next.data).toBe(20);
        expect(mergedList.head.next.next.next.next.data).toBe(25);
        expect(mergedList.head.next.next.next.next.next.data).toBe(30);
        expect(mergedList.head.next.next.next.next.next.next.data).toBe(35);
        expect(mergedList.head.next.next.next.next.next.next.next).toBeNull();
    });

    test('should handle edge cases with duplicates', () => {
        const list1 = new LinkedList();
        const list2 = new LinkedList();
        
        list1.addToEnd(1);
        list1.addToEnd(3);
        list1.addToEnd(5);
        
        list2.addToEnd(2);
        list2.addToEnd(4);
        list2.addToEnd(6);
        
        const mergedList = mergeSortedLists(list1, list2);
        expect(mergedList.head.data).toBe(1);
        expect(mergedList.head.next.data).toBe(2);
        expect(mergedList.head.next.next.data).toBe(3);
        expect(mergedList.head.next.next.next.data).toBe(4);
        expect(mergedList.head.next.next.next.next.data).toBe(5);
        expect(mergedList.head.next.next.next.next.next.data).toBe(6);
        expect(mergedList.head.next.next.next.next.next.next).toBeNull();
    });
});