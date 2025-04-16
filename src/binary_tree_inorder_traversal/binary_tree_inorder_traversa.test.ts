import { inorderTraversal,TreeNode } from './index';

describe('inorderTraversal', () => {
    test('例1', () => {
        const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
        expect(inorderTraversal(root)).toEqual([1, 3, 2]);
    });

    test('例2', () => {
        const root = new TreeNode(1);
        expect(inorderTraversal(root)).toEqual([1]);
    });

    test('例3', () => {
        const root = null;
        expect(inorderTraversal(root)).toEqual([]);
    });
    test('例4', () => {
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(inorderTraversal(root)).toEqual([2, 1, 3]);
    });
    test('例5', () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
        expect(inorderTraversal(root)).toEqual([4, 2, 5, 1, 3]);
    }
    );
});