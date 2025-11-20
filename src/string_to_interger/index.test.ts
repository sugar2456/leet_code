import { myAtoi } from ".";

describe("String To Integer", () => {
    it("正常系：数字のみ", () => {
        const input = "42";
        const actual = myAtoi(input);
        const expected = 42;
        expect(actual).toBe(expected);
    });
    it("正常系：空白と負の符号付き数字", () => {
        const input = "-042";
        const actual = myAtoi(input);
        const expected = -42;
        expect(actual).toBe(expected);
    });
    it("正常系：数字と文字列の混合", () => {
        const input = "1337c0d3";
        const actual = myAtoi(input);
        const expected = 1337;
        expect(actual).toBe(expected);

    });
    it("正常系：計算式", () => {
        const input = "0-1";
        const actual = myAtoi(input);
        const expected = 0;
        expect(actual).toBe(expected);

    });
    it("正常系：単語", () => {
        const input = "words and 987";
        const actual = myAtoi(input);
        const expected = 0;
        expect(actual).toBe(expected);
    });
})