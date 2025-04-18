// 問題
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list.
// The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * 二つのNodeListをマージする関数
 * 
 * [処理の流れ]
 * ダミーヘッドを作成する
 * ListNodeをループする
 * 値が小さいノードを次のノードに設定する
 * nodeを一つずらす
 * 次のノードを現在のノードに設定する
 * 残りのnodeを設定する
 * ダミーの次のポインタを返却する
 * 
 * @param list1 NodeList1
 * @param list2 NodeList2
 * @returns NodeList
 */
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // ダミーヘッドを作成（最初のノードを簡単に扱うため）
    const dummyHead = new ListNode(-1);
    let current = dummyHead;
    
    // 両方のリストがnullでない間、値を比較して小さい方を追加
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // 残りのノードを追加（一方のリストが空になった場合）
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    
    // ダミーヘッドの次のノードが結果の先頭
    return dummyHead.next;
};