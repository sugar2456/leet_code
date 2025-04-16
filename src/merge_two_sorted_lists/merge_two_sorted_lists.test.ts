import { mergeTwoLists } from './index';
import { ListNode } from './index';

describe('mergeTwoLists', () => {
    test('should merge two sorted linked lists', () => {
        // Create first list: 1 -> 2 -> 4
        const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
        
        // Create second list: 1 -> 3 -> 4
        const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
        
        // Merge the lists
        const mergedList = mergeTwoLists(list1, list2);
        
        // Expected merged list: 1 -> 1 -> 2 -> 3 -> 4 -> 4
        const expectedList = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))));
        
        // Compare the merged list with the expected list
        let currentMerged = mergedList;
        let currentExpected: ListNode | null = expectedList;
        
        while (currentMerged !== null && currentExpected !== null) {
            expect(currentMerged.val).toBe(currentExpected.val);
            currentMerged = currentMerged.next;
            currentExpected = currentExpected?.next || null;
        }
        
        expect(currentMerged).toBe(null);
        expect(currentExpected).toBe(null);
    });
}
);