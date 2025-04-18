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
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

/**
 * 最も深いノードの長さを取得する
 * 
 * [処理の流れ]  
 * カウンターを初期化
 * ノードがnullの場合は0を返す
 * 左側の探索木の深さを取得
 * 右側の探索木の深さを取得
 * 左側の探索木の深さと右側の探索木の深さを比較し、最大値を取得
 * その最大値に1を加算して返す
 * @param root ノード
 * @returns 探索木の深さ
 */
export function maxDepth(root: TreeNode | null): number {
    let count = 1;
    if (root == null) {
        return 0;
    }
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
};