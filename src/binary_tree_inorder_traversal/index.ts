/**
 * Definition for a binary tree node.
 */
export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// 問題
// Given the root of a binary tree, return the inorder traversal of its nodes' values.
// 二分木の中序走査を行う関数
export function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    
    // ヘルパー関数を定義
    const traverse = (node: TreeNode | null) => {
        if (node === null) return;
        
        // 左部分木を走査
        if (node.left) traverse(node.left);
        
        // 現在のノードの値を追加
        result.push(node.val);
        
        // 右部分木を走査
        if (node.right) traverse(node.right);
    };
    
    traverse(root);
    return result;
}