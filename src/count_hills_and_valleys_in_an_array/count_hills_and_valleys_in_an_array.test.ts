import countHillValley from "."

describe("谷と丘のカウント", () => {
    it("正常系", () => {
        const input = [2,4,1,1,6,5];
        const actual = countHillValley(input);
        const expected = 3;

        expect(actual).toBe(expected);
    });
    it("異常系", () => {
        const input = [6,6,5,5,4,1];
        const actual = countHillValley(input);
        const expected = 0;

        expect(actual).toBe(expected);
    });
})