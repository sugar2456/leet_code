import { hasCycle, ListNode } from ".";

describe("linked list cycleのテスト", () => {
    it("正常系：パターン１", () => {
        const testData = createCycleLinkedList([3, 2, 0, -4], 2);
        const actual = hasCycle(testData);
        expect(actual).toEqual(true);
    });
    it("正常系：パターン２", () => {
        const testData = createCycleLinkedList([1, 2], 0);
        const actual = hasCycle(testData);
        expect(actual).toEqual(true);
    });
    it("正常系：パターン３", () => {
        const testData = createCycleLinkedList([1], -1);
        const actual = hasCycle(testData);
        expect(actual).toEqual(false);
    });
});

function createCycleLinkedList(values: number[], pos: number): ListNode | null {
    if (values.length === 0) return null;

    const nodes: ListNode[] = [];

    // 全ノードを作成
    for (const val of values) {
        nodes.push(new ListNode(val));
    }

    // ノードを接続
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }

    // 循環を作成
    if (pos >= 0 && pos < nodes.length) {
        nodes[nodes.length - 1].next = nodes[pos];
    }

    return nodes[0];
}