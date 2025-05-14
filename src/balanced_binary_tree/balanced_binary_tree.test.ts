import { isBalanced, TreeNode } from ".";

describe("Balanced Binary Tree", () => {
    it("正常系テスト 深さ２", () => {
        const input = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(3, null, null), new TreeNode(4, null, null)),
            new TreeNode(2, new TreeNode(4, null, null), new TreeNode(3, null, null))
        );
        const actual = isBalanced(input);
        const expected = true;
        expect(actual).toEqual(expected);
    });
    it("正常系テスト 深さ１", () => {
        const input = new TreeNode(
            1,
            new TreeNode(2, null, null),
            new TreeNode(2, null, null)
        );
        const actual = isBalanced(input);
        const expected = true;
        expect(actual).toEqual(expected);
    });
    it("正常系テスト 深さ０", () => {
        const input = new TreeNode(
            1,
            null,
            null
        );
        const actual = isBalanced(input);
        const expected = true;
        expect(actual).toEqual(expected);
    });
    it("異常系テスト 深さ３", () => {
        const input = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(3, null, null), new TreeNode(3, new TreeNode(4, null, null), new TreeNode(4, null, null))),
            new TreeNode(2, null, null)
        );
        const actual = isBalanced(input);
        const expected = false;
        expect(actual).toEqual(expected);
    });
});