import { intToRoman } from ".";

describe("Interger To Roman", () => {
    it("正常系：4桁の数字", () => {
        const num = 3749
        const expected = "MMMDCCXLIX"
        const actual = intToRoman(num);

        expect(actual).toBe(expected);
    });
    it("正常系：2桁の数字", () => {
        const num = 58
        const expected = "LVIII"
        const actual = intToRoman(num);

        expect(actual).toBe(expected);
    });
    it("正常系：4桁の数字", () => {
        const num = 1994
        const expected = "MCMXCIV"
        const actual = intToRoman(num);

        expect(actual).toBe(expected);
    });
    it("正常系：入力最小の数値", () => {
        const num = 1
        const expected = "I"
        const actual = intToRoman(num);

        expect(actual).toBe(expected);
    });
    it("正常系：最大の数値", () => {
        const num = 3999
        const expected = "MMMCMXCIX"
        const actual = intToRoman(num);

        expect(actual).toBe(expected);
    });
})