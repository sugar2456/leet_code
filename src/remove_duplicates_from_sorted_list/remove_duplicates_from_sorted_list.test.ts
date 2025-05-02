import {deleteDuplicates, ListNode} from ".";

describe("deleteDuplicates", () => {
    it("空のリストは空のリストを返す", () => {
        const head = null;
        const result = deleteDuplicates(head);
        expect(result).toBeNull();
    });
    it("1つの要素のリストはそのまま返す", () => {
        const head = new ListNode(1);
        const result = deleteDuplicates(head);
        expect(result).toEqual(head);
    });
    it("重複のないリストはそのまま返す", () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3)));
        const result = deleteDuplicates(head);
        expect(result).toEqual(head);
    });
    it("重複のあるリストは重複を削除して返す", () => {
        const head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
        const result = deleteDuplicates(head);
        const expected = new ListNode(1, new ListNode(2, new ListNode(3)));
        expect(result).toEqual(expected);
    });
    it("全ての要素が重複しているリストは1つの要素を返す", () => {
        const head = new ListNode(1, new ListNode(1, new ListNode(1)));
        const result = deleteDuplicates(head);
        const expected = new ListNode(1);
        expect(result).toEqual(expected);
    }
    );
    it("全ての要素が異なるリストはそのまま返す", () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
        const result = deleteDuplicates(head);
        expect(result).toEqual(head);
    }
    );
    it("リストの先頭が重複している場合", () => {
        const head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3))));
        const result = deleteDuplicates(head);
        const expected = new ListNode(1, new ListNode(2, new ListNode(3)));
        expect(result).toEqual(expected);
    }
    );
});