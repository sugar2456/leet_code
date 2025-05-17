import { minDepth, TreeNode } from "."

describe('Minimum Depth of Binary Tree', () => {
    it('深さ２の木', () => {
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
        expect(minDepth(root)).toBe(2);
    });
    it('深さ３の木 最小2の木', () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3))
        expect(minDepth(root)).toBe(2);
    });
    it('深さ４の木 最小3の木', () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, null, new TreeNode(5)))
        expect(minDepth(root)).toBe(3);
    });
    it('深さ１の木', () => {
        const root = new TreeNode(1, null, null)
        expect(minDepth(root)).toBe(1);
    });
});