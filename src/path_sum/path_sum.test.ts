import { hasPathSum, TreeNode } from ".";

describe('Path Sum', () => {
    it('パターン１', () => {
        const root = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))));
        expect(hasPathSum(root, 22)).toBe(true);
    }
    );
    it('パターン２', () => {
        const root = {
            val: 1,
            left: {
                val: 2,
                left: null,
                right: null
            },
            right: {
                val: 3,
                left: null,
                right: null
            }
        };
        expect(hasPathSum(root, 5)).toBe(false);
    }
    );
    it('パターン３', () => {
        const root = null;
        expect(hasPathSum(root, 0)).toBe(false);
    }
    );
});
