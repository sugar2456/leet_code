/**
 * 重複のないソート済みリストを返す
 * @param head ソート済みリストの先頭ノード
 * @returns 重複のないソート済みリストの先頭ノード
 */
export function deleteDuplicates(head: ListNode | null): ListNode | null {
    // 空リストまたは単一要素のリストはそのまま返す
    if (!head || !head.next) return head;

    let current = head;
    
    // より効率的なループ条件
    while (current && current.next) {
        // 重複がある場合
        if (current.val === current.next.val) {
            // 連続する全ての重複を一度にスキップ
            let duplicate = current.val;
            while (current.next && current.next.val === duplicate) {
                current.next = current.next.next;
            }
        } else {
            // 重複がない場合のみ次に進む
            current = current.next;
        }
    }
    
    return head;
};
// export function deleteDuplicates(head: ListNode | null): ListNode | null {
//     if (head === null || head.next === null) return head;

//     while (head.next && head.val === head.next.val) {
//         head.next = head.next.next;
//     }
//     head.next = deleteDuplicates(head.next);
//     return head;
// };

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}