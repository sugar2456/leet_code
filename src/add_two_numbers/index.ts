export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * 二つの線形ノードの足し算
 * 
 * [処理]
 * ダミーヘッドを登録
 * 繰り上がりを0で初期化
 * 以下の条件でループを回す
 * - l1がnullでない
 * - l2がnullでない
 * - 繰り上がりが0より大きい
 * 
 * ノードの値を取得（nullの場合は0）
 * ノードの値と繰り上がりを足す
 * 繰り上がりが発生したら繰り上がりを更新
 * 結果に格納するノードを作成
 * 結果ノードを次に進める
 * l1とl2を次に進める
 * 
 * この処理ではダミーヘッドの次のノードから計算結果が配置されるので、
 * ダミーヘッドの次のノードを返却する
 * 
 * @param l1 入力１
 * @param l2 入力２
 * @returns 結果
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;

        // 結果のノードを作成
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        // 次のノードへ移動
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next;  
};


