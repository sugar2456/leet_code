import wiggleMaxLength from ".";

describe("Wiggle Subsequence", () => {
    it("正常系1", () => {
        const input = [1,7,4,9,2,5];
        const actual = wiggleMaxLength(input);

        const expected = 6;

        expect(actual).toBe(expected);
    });

    it("正常系2", () => {
        const input = [1,17,5,10,13,15,10,5,16,8];
        const actual = wiggleMaxLength(input);

        const expected = 7;

        expect(actual).toBe(expected);
    });

    it("正常系3", () => {
        const input = [1,2,3,4,5,6,7,8,9];
        const actual = wiggleMaxLength(input);

        const expected = 2;

        expect(actual).toBe(expected);
    });
})