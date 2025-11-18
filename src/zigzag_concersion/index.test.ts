import { convert } from ".";

describe("Zigzag Convertion", () => {
    it("正常系：三行", () => {
        const s = "PAYPALISHIRING";
        const numRows = 3;
        const expected = "PAHNAPLSIIGYIR";
        const actual = convert(s, numRows);
        expect(actual).toBe(expected);
    });
    it("正常系：四行", () => {
        const s = "PAYPALISHIRING";
        const numRows = 4;
        const expected = "PINALSIGYAHRPI";
        const actual = convert(s, numRows);
        expect(actual).toBe(expected);
    });

    // エッジケース：行数が1
    it("エッジケース：一行（ジグザグにならない）", () => {
        const s = "ABCDEFGH";
        const numRows = 1;
        const expected = "ABCDEFGH"; // そのまま
        const actual = convert(s, numRows);
        expect(actual).toBe(expected);
    });

    // エッジケース：行数が2（最小のジグザグ）
    it("エッジケース：二行", () => {
        const s = "ABCDE";
        const numRows = 2;
        // A C E (0行目)
        // B D   (1行目)
        const expected = "ACEBD";
        const actual = convert(s, numRows);
        expect(actual).toBe(expected);
    });

    // エッジケース：文字列長が1
    it("エッジケース：文字列長が1", () => {
        const s = "A";
        const numRows = 3;
        const expected = "A";
        const actual = convert(s, numRows);
        expect(actual).toBe(expected);
    });

    // エッジケース：文字列長が2
    it("エッジケース：文字列長が2", () => {
        const s = "AB";
        const numRows = 3;
        const expected = "AB";
        const actual = convert(s, numRows);
        expect(actual).toBe(expected);
    });

    // エッジケース：行数が文字列長と同じ
    it("エッジケース：行数が文字列長と同じ（全て縦一列）", () => {
        const s = "ABCD";
        const numRows = 4;
        const expected = "ABCD"; // そのまま
        const actual = convert(s, numRows);
        expect(actual).toBe(expected);
    });

    // エッジケース：行数が文字列長より大きい
    it("エッジケース：行数が文字列長より大きい", () => {
        const s = "ABC";
        const numRows = 5;
        const expected = "ABC"; // そのまま
        const actual = convert(s, numRows);
        expect(actual).toBe(expected);
    });

    // エッジケース：空文字列
    it("エッジケース：空文字列", () => {
        const s = "";
        const numRows = 3;
        const expected = "";
        const actual = convert(s, numRows);
        expect(actual).toBe(expected);
    });

    // エッジケース：同じ文字が連続
    it("エッジケース：同じ文字が連続", () => {
        const s = "AAAA";
        const numRows = 2;
        // A A (0行目)
        // A A (1行目)
        const expected = "AAAA";
        const actual = convert(s, numRows);
        expect(actual).toBe(expected);
    });
});