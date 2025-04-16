import {isSymmetric, TreeNode} from ".";

describe("isSymmetric", () => {
    test("should return true for symmetric tree", () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(2);
        root.left.left = new TreeNode(3);
        root.left.right = new TreeNode(4);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(3);

        expect(isSymmetric(root)).toBe(true);
    });

    test("should return false for asymmetric tree", () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(2);
        root.left.right = new TreeNode(3);
        root.right.right = new TreeNode(3);

        expect(isSymmetric(root)).toBe(false);
    });
});