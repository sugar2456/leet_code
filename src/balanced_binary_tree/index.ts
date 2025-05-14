export function isBalanced(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }

    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return false;
    }

    return isBalanced(root.left) && isBalanced(root.right);
}

function getHeight(node: TreeNode | null): number {
    if (node === null) {
        return 0;
    }

    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}