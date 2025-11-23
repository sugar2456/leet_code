import { isMatch } from "."

describe("Regular Expression Matching", () => {
    it("正常系：一致しないパターン", () => {
        const s = "aa"
        const p = "a";
        const expected = false;
        const actual = isMatch(s, p);
        expect(actual).toBe(expected);
    });
    it("正常系：一致するパターン", () => {
        const s = "aa"
        const p = "a*";
        const expected = true;
        const actual = isMatch(s, p);
        expect(actual).toBe(expected);
    });
    it("正常系：一致するパターン", () => {
        const s = "aaaaaaaaaaa"
        const p = "a*";
        const expected = true;
        const actual = isMatch(s, p);
        expect(actual).toBe(expected);
    });
    it("正常系：一致するパターン", () => {
        const s = "ab"
        const p = ".*";
        const expected = true;
        const actual = isMatch(s, p);
        expect(actual).toBe(expected);
    });
    it("正常系：入力値の最大境界値の一致", () => {
        const s = "aaaaabbbbbcccccddddd"
        const p = "aaaaabbbbbcccccdddd*";
        const expected = true;
        const actual = isMatch(s, p);
        expect(actual).toBe(expected);
    });
    it("正常系：入力値の最大境界値の不一致", () => {
        const s = "aaaaabbbbbcccccddddd"
        const p = "aaaaabbbbbcccccdddc*";
        const expected = false;
        const actual = isMatch(s, p);
        expect(actual).toBe(expected);
    });
    it("正常系：入力値の最小界値の一致", () => {
        const s = "a"
        const p = ".";
        const expected = true;
        const actual = isMatch(s, p);
        expect(actual).toBe(expected);
    });
    it("正常系：入力値の最小界値の不一致", () => {
        const s = "a"
        const p = "b";
        const expected = false;
        const actual = isMatch(s, p);
        expect(actual).toBe(expected);
    });
})