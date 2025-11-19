import { reverse } from ".";

describe("Reverse Interger", () => {
    it("正常系：正の整数", () => {
        const expected = 321;
        expect(reverse(123)).toBe(expected);
    });
    it("正常系：負の整数", () => {
        const expected = -321;
        expect(reverse(-123)).toBe(expected);
    });
    it("正常系：10の倍数", () => {
        const expected = 21;
        expect(reverse(120)).toBe(expected);
    });
    it("境界値：反転後がINT32_MAXギリギリ以下", () => {
        const expected = 2147483641; // INT32_MAX以下
        expect(reverse(1463847412)).toBe(expected);
    });
    it("境界値：反転後がINT32_MAXを超える", () => {
        const expected = 0; // 2147483651 > INT32_MAX
        expect(reverse(1563847412)).toBe(expected);
    });
    it("境界値：反転後がINT32_MINギリギリ以上", () => {
        const expected = -2143847412; // INT32_MIN以上
        expect(reverse(-2147483412)).toBe(expected);
    });
    it("境界値：反転後がINT32_MINを下回る", () => {
        const expected = 0; // -2463847412 < INT32_MIN
        expect(reverse(-2147483642)).toBe(expected);
    });
    it("正常系：入力0", () => {
        const expected = 0;
        expect(reverse(0)).toBe(expected);
    });
})