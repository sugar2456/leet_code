import moveZeroes from "."

describe("move zeroes　テスト", () => {
    it("正常系", () => {
        const input = [0,1,0,3,12];
        moveZeroes(input);
        const expected = [1,3,12,0,0];

        expect(input).toEqual(expected);
    });

    it("配列なし", () => {
        const input = [0];
        moveZeroes(input);
        const expected = [0];

        expect(input).toEqual(expected);
    })
})