
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * 【例】
 *  1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 2...
 * 初期状態:
 * slow = 1, fast = 1
 * ステップ1:
 * slow = 2, fast = 3
 * ステップ2:
 * slow = 3, fast = 5
 * ステップ3:
 * slow = 4, fast = 2
 * ステップ4:
 * slow = 5, fast = 4
 * ステップ5:
 * slow = 6, fast = 6  ← 一致! 循環あり
 * @param head 線形ノード
 * @returns 循環しているか否か
 */
export function hasCycle(head: ListNode | null): boolean {
    // 初手からnullや次のnodeがなければ循環なし
    if (!head || !head.next) {
        return false;
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};