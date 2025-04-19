import maxArea from ".";

describe("Container With Most Water", () => {
    it("正常系", () => {
        const input = [1,8,6,2,5,4,8,3,7];
        const actual = maxArea(input);
        const expected = 49;

        expect(actual).toBe(expected);
    });

    it("異常系", () => {
        const input = [1, 1];
        const actual = maxArea(input);
        const expected = 1;

        expect(actual).toBe(expected);
    });
})