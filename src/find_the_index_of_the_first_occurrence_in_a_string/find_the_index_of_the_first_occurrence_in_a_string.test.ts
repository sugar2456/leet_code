import strStr from ".";

describe("Find the Index of the First Occurrence in a String", () => {
    it("正常系パターン１", () => {
        const haystack = "sadbutsad";
        const needle = "sad";
        const expected = 0;
        const result = strStr(haystack, needle);
        expect(result).toBe(expected);
    }
    );
    it("正常系パターン２", () => {
        const haystack = "leetcode";
        const needle = "leeto";
        const expected = -1;
        const result = strStr(haystack, needle);
        expect(result).toBe(expected);
    }
    );
    it("正常系パターン３", () => {
        const haystack = "a";
        const needle = "a";
        const expected = 0;
        const result = strStr(haystack, needle);
        expect(result).toBe(expected);
    }
    );
    it("正常系パターン４", () => {
        const haystack = "a";
        const needle = "b";
        const expected = -1;
        const result = strStr(haystack, needle);
        expect(result).toBe(expected);
    }
    );
});