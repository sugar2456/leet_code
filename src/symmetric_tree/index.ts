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
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

/**
 * 探索木の対称性検査  
 * 
 * [処理の流れ]  
 * 探索木をルートの左右木を左右チェックする  
 * 探索木をnullチェック  
 * 左右の探索木の値を等価チェック  
 * さらに探索木の内側、外側対照性が取れるように  
 * チェック関数に渡す  
 * 
 * @param root 探索木
 * @returns 左右対称かどうか
 */
export function isSymmetric(root: TreeNode): boolean {
    return isMirror(root.left, root.right);
};

function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
    // 両方nullなら対称
    if (left === null && right === null) return true;
    
    // 片方だけnullなら対称ではない
    if (left === null || right === null) return false;
    
    // 値が等しく、交差した子が対称であれば対称
    return (left.val === right.val) &&
           isMirror(left.left, right.right) &&
           isMirror(left.right, right.left);
}