import { addTwoNumbers, ListNode } from '.';

describe('AddTwoNumbers', () => {
    function createLinkedList(arr: number[]): ListNode | null {
        if (arr.length === 0) return null;
        const head = new ListNode(arr[0]);
        let current = head;
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }
    test('正常系', () => {
        const l1 = createLinkedList([2, 4, 3]);
        const l2 = createLinkedList([5, 6, 4]);
        const expected = createLinkedList([7, 0, 8]);

        const result = addTwoNumbers(l1, l2);

        expect(result).toEqual(expected);
    });
    test('異常系: 0', () => {
        const l1 = createLinkedList([0]);
        const l2 = createLinkedList([0]);
        const expected = createLinkedList([0]);
    
        const result = addTwoNumbers(l1, l2);
        expect(result).toEqual(expected);
    });
    test('異常系：異なる長さのリストと繰り上がり', () => {
        const l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
        const l2 = createLinkedList([9, 9, 9, 9]);
        const expected = createLinkedList([8, 9, 9, 9, 0, 0, 0, 1]);
    
        const result = addTwoNumbers(l1, l2);
        expect(result).toEqual(expected);
    });
});