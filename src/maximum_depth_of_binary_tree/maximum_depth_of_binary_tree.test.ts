import { maxDepth, TreeNode } from ".";

describe("Maximum Depth of Binary Tree", () => {
  it("should return 3 for the given tree", () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));
    expect(maxDepth(root)).toBe(3);
  });

  it("should return 2 for the given tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    expect(maxDepth(root)).toBe(2);
  });

  it("should return 5 for the given tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    root.left.left.left.left = new TreeNode(5);
    expect(maxDepth(root)).toBe(5);
  });
  
  it("should return 0 for an empty tree", () => {
    const root = null;
    expect(maxDepth(root)).toBe(0);
  });
});
