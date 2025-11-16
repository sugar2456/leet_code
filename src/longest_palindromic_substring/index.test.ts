import { expandAroundCenter, longestPalindrome } from ".";

describe("Longest Palindromic Substring", () => {
    describe("expandAroundCenter", () => {
        it("正常系：一般的なパターン", () => {
            const expected = 3;
            const actual = expandAroundCenter(1, 1, "babad");
            expect(actual).toBe(expected);
        });
        it("正常系：開始位置を変えてみる", () => {
            const expected = 3;
            const actual = expandAroundCenter(2, 2, "babad");
            expect(actual).toBe(expected);
        });
        it("正常系：開始位置を回文にならないポジションにしてみる", () => {
            const expected = 1;
            const actual = expandAroundCenter(3, 3, "babad");
            expect(actual).toBe(expected);
        });
        it("正常系：開始位置を回文にならないポジションにしてみる(左端から開始)", () => {
            const expected = 1;
            const actual = expandAroundCenter(0, 0, "babad");
            expect(actual).toBe(expected);
        });
        it("正常系：開始位置を回文にならないポジションにしてみる(右端から開始)", () => {
            const expected = 1;
            const actual = expandAroundCenter(4, 4, "babad");
            expect(actual).toBe(expected);
        });
        it("正常系：1以上の文字列を指定して回文チェックしてみる", () => {
            const expected = 0;
            const actual = expandAroundCenter(0, 1, "babad");
            expect(actual).toBe(expected);
        });
        it("正常系：1以上の文字列を指定して回文チェックをしてみる", () => {
            const expected = 2;
            const actual = expandAroundCenter(0, 1, "ccbad");
            expect(actual).toBe(expected);
        });
        it("正常系：偶数の回文で6文字ヒットさせる", () => {
            const expected = 6;
            const actual = expandAroundCenter(2, 3, "dsccsdbad");
            expect(actual).toBe(expected);
        });
        it("異常系：rightとleftが離れた位置から指定する", () => {
            expect(() => {
                expandAroundCenter(2, 6, "abcghjcba");
            }).toThrow("left と right は隣接している必要があります");
        });
    });

    describe("longestPalindrome", () => {
        it("正常系：部分一致、先頭に回文", () => {
            const expected = "bab";
            const actual = longestPalindrome("babad");
            expect(actual).toBe(expected);
        });
        it("正常系：部分一致、中央に回文", () => {
            const expected = "bb";
            const actual = longestPalindrome("cbbd");
            expect(actual).toBe(expected);
        });
        it("正常系：全文一致", () => {
            const expected = "aaabccbaaa";
            const actual = longestPalindrome("aaabccbaaa");
            expect(actual).toBe(expected)
        });
    })
});
