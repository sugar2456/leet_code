import { sortedArrayToBST, TreeNode } from ".";

describe("Convert Sorted Array to Binary Search Tree", () => {
    it("正常系テスト 深さ２　左に配置する", () => {
        const input = [-10, -3, 0, 5, 9];
        const actual = sortedArrayToBST(input);
        const expected = new TreeNode(
            0,
            new TreeNode(-3, new TreeNode(-10, null, null), null),
            new TreeNode(9, new TreeNode(5, null, null), null)
        );
        expect(actual).toEqual(expected);
    });
    it("正常系テスト 深さ１　要素２つ", () => {
        const input = [1, 3];
        const actual = sortedArrayToBST(input);
        const expected = new TreeNode(
            3,
            new TreeNode(1, null, null),
            null
        );
        expect(actual).toEqual(expected);
    });
    it("空配列を渡した場合", () => {
        const input: number[] = [];
        const actual = sortedArrayToBST(input);
        const expected = null;
        expect(actual).toEqual(expected);
    });
});