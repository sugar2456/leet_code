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

/**
 * 探索木中順走査
 * 
 * [処理の流れ]
 * 結果の配列変数を初期化  
 * 中順走査のヘルパー関数を定義  
 * nodeがnullなら返却  
 * nodeにleftが存在するなら再起的に呼び出す  
 * nodeの値を結果に詰める  
 * nodeのrightが存在するなら再起的に呼び出す  
 * 結果を返却する  
 *
 * @param root 探索木
 * @returns 探索結果の値の配列
 */
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