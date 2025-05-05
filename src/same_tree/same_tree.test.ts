import { isSameTree, TreeNode } from ".";

describe("sameTree", () => {
  it("正常系", () => {
    const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    expect(isSameTree(p, q)).toBe(true);
  });
  it("対称木", () => {
    const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const q = new TreeNode(1, new TreeNode(3), new TreeNode(2));
    expect(isSameTree(p, q)).toBe(false);
  });
  it("片方がnull", () => {
    const p = new TreeNode(1, new TreeNode(2), null);
    const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    expect(isSameTree(p, q)).toBe(false);
  });
  it("両方がnull", () => {
    const p = null;
    const q = null;
    expect(isSameTree(p, q)).toBe(true);
  });
  it("片方がnullで片方が空木", () => {
    const p = null;
    const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    expect(isSameTree(p, q)).toBe(false);
  });
  it("片方が空木で片方がnull", () => {
    const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const q = null;
    expect(isSameTree(p, q)).toBe(false);
  });
});
