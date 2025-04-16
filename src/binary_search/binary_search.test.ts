import search from ".";

describe("中間探索", () => {
    it("正常系テスト", () => {
        const input = [-1,0,3,5,9,12];
        const target = 9;

        const actual = search(input, target);

        const expected = 4;

        expect(actual).toBe(expected);
    });

    it("異常系テスト", () => {
        const input = [-1,0,3,5,9,12];
        const target = 2;

        const actual = search(input, target);

        const expected = -1;

        expect(actual).toBe(expected);
    })
});